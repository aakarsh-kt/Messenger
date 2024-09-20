// contexts/CallContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import Peer from "peerjs";

const CallContext = createContext();

export function useCall() {
  return useContext(CallContext);
}

export function CallProvider({ children, userId }) {
  const [peer, setPeer] = useState(null);
  const [currentCall, setCurrentCall] = useState(null);

  useEffect(() => {
    // Initialize PeerJS when the component mounts
    const peerInstance = new Peer(userId, {
      host: "peerjs.com", // Use PeerJS cloud server
      port: 443,
      secure: true,
    });

    peerInstance.on("open", (id) => {
      console.log("Connected to PeerJS with ID:", id);
    });

    peerInstance.on("call", (call) => {
      // Answer an incoming call
      console.log("Receiving a call...");
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          call.answer(stream); // Answer with your video/audio stream
          setCurrentCall(call);

          // Handle the remote stream
          call.on("stream", (remoteStream) => {
            const video = document.getElementById("remoteVideo");
            if (video) {
              video.srcObject = remoteStream;
              video.play();
            }
          });
        });
    });

    setPeer(peerInstance);

    return () => {
      peerInstance.destroy();
    };
  }, [userId]);

  const startCall = (remoteUserId) => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        const call = peer.call(remoteUserId, stream);

        // Handle the local stream (your stream)
        const localVideo = document.getElementById("localVideo");
        if (localVideo) {
          localVideo.srcObject = stream;
          localVideo.play();
        }

        // Handle the remote stream
        call.on("stream", (remoteStream) => {
          const remoteVideo = document.getElementById("remoteVideo");
          if (remoteVideo) {
            remoteVideo.srcObject = remoteStream;
            remoteVideo.play();
          }
        });

        setCurrentCall(call);
      })
      .catch((err) => {
        console.error("Failed to get local stream:", err);
      });
  };

  const endCall = () => {
    if (currentCall) {
      currentCall.close();
      setCurrentCall(null);
    }
  };

  return (
    <CallContext.Provider value={{ startCall, endCall, currentCall }}>
      {children}
    </CallContext.Provider>
  );
}
