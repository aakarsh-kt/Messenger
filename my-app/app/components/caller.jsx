
import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function Caller(props) {
    const myMeeting = useRef(null);
    const zcInstance = useRef(null); // To keep track of the Zego instance

    useEffect(() => {
        if (myMeeting.current) {
            initiateCall();
        }

        // Cleanup function to leave the room and destroy the instance when the component unmounts
        return () => {
            if (zcInstance.current) {
                console.log("Leaving room and destroying instance...");
                zcInstance.current.destroy(); // Use destroy() to leave room and clean up the instance
                zcInstance.current = null; // Reset the instance
            }
        };
    }, [myMeeting]);

    const initiateCall = async () => {
        // Avoid joining the room if already in one
        if (zcInstance.current) {
            console.log("Already in a room, skipping join.");
            return;
        }

        const appID = 1196619711;
        const serverSecret = "0cd3c1e75438d75a4fd3f88285176275";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, props.roomId, props.userId, props.name);

        // Initialize Zego
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zcInstance.current = zc; // Store the instance to use later for cleanup

        // Join the room
        zc.joinRoom({
            container: myMeeting.current,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            }
        });
    };

    return (
        <div>
            <div ref={myMeeting} />
        </div>
    );
}

