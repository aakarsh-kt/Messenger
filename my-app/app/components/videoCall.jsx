// components/VideoCall.js
import { useCall } from "../contexts/CallContext";
import { useState } from "react";

export default function VideoCall() {
  const { startCall, endCall, currentCall } = useCall();
  const [remoteUserId, setRemoteUserId] = useState("");

  const handleStartCall = () => {
    if (remoteUserId) {
      startCall(remoteUserId);
    }
  };

  return (
    <div>
      <h2>Video Call</h2>
      <div>
        <label>Remote User ID:</label>
        <input
          type="text"
          value={remoteUserId}
          onChange={(e) => setRemoteUserId(e.target.value)}
        />
        <button onClick={handleStartCall}>Start Call</button>
        <button onClick={endCall} disabled={!currentCall}>
          End Call
        </button>
      </div>

      <div>
        <h3>Your Video:</h3>
        <video id="localVideo" autoPlay muted></video>
      </div>
      <div>
        <h3>Remote Video:</h3>
        <video id="remoteVideo" autoPlay></video>
      </div>
    </div>
  );
}
