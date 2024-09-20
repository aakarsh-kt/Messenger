import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const { default: Peer } = require("peerjs");

const IncomingCallComponent = ({ localUserId, remoteUserId }) => {
    const peer = useRef(new Peer(localUserId)); // Initialize Peer instance
    const localStream = useRef(null);
    const remoteVideoRef = useRef();
    const [isCallActive, setIsCallActive] = useState(false);

    useEffect(() => {
        peer.current.on('call', (call) => {
            // Prompt user to accept or decline the call
            if (window.confirm('Incoming call! Would you like to accept?')) {
                navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                    .then((stream) => {
                        localStream.current = stream;
                        call.answer(localStream.current); // Answer the call with local stream

                        call.on('stream', (remoteStream) => {
                            remoteVideoRef.current.srcObject = remoteStream; // Display remote video
                            setIsCallActive(true);
                        });
                    });
            } else {
                call.close(); // Close the call if declined
            }
        });
    }, [localUserId]);

    return (
        <div>
            {isCallActive && <video ref={remoteVideoRef} autoPlay className="remote-video" />}
        </div>
    );
};
export default IncomingCallComponent;