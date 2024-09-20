import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function Caller(props) {
    const myMeeting = useRef(null);
    
    useEffect(() => {
        if (myMeeting.current) {
            initiateCall();
        }
    }, [myMeeting]);

    const initiateCall = async () => {
        const appID = 1196619711;
        const serverSecret = "0cd3c1e75438d75a4fd3f88285176275";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, props.roomId, props.userId, props.name);

        // Send invitation to the other user
        sendCallInvitation(props.recipientId, props.roomId);

        // Initialize Zego
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: myMeeting.current,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            }
        });
    };

    const sendCallInvitation = (recipientId, roomId) => {
        const invitationMessage = {
            type: 'call-invitation',
            callerId: props.userId,
            roomId: roomId,
        };

        // Use your WebSocket or API to send the invitation
        // For example:
        // websocket.send(JSON.stringify(invitationMessage));
    };

    return (
        <div>
            <div ref={myMeeting} />
        </div>
    );
}
