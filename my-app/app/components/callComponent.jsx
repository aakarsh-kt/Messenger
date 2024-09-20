"use client";
import React, { useEffect, useRef } from 'react';
import Peer from 'peerjs';

const CallComponent = ({ localUserId, remoteUserId ,videoCall}) => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const peer = useRef(null);
    const localStream = useRef(null);

    useEffect(() => {
        // Initialize PeerJS for the local user
        peer.current = new Peer(localUserId);

        // Get local media stream
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                localStream.current = stream;
                localVideoRef.current.srcObject = stream;

                // Listen for incoming calls
                peer.current.on('call', (call) => {
                    call.answer(stream); // Answer the call with local stream
                    call.on('stream', (remoteStream) => {
                        remoteVideoRef.current.srcObject = remoteStream; // Display remote stream
                    });
                });
            });

        // Clean up on component unmount
        return () => {
            if (localStream.current) {
                localStream.current.getTracks().forEach(track => track.stop());
            }
        };
    }, [localUserId]);

    const startCall = () => {
        const call = peer.current.call(remoteUserId, localStream.current);
        call.on('stream', (remoteStream) => {
            remoteVideoRef.current.srcObject = remoteStream; // Display remote stream
        });
    };

    return (
        <div className='h-full w-full'>
            <video ref={localVideoRef} autoPlay muted className="local-video h-full w-full  " />
            <video ref={remoteVideoRef} autoPlay className="remote-video h-full w-full" />
            <button onClick={startCall}>Start Call</button>
        </div>
    );
};

export default CallComponent;
