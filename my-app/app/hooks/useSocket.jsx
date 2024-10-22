import { useState, useEffect } from "react";

export const useSocket = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // const ws = new WebSocket("wss://13.233.230.204:8080"); // Update this line

    // const ws = new WebSocket("ws://43.205.228.117:8080");
    const ws=new WebSocket("ws://localhost:8080");
    ws.onopen = () => {
      console.log("Connected to server");
      setSocket(ws);
    };
    ws.onclose = () => {
      console.log("Disconnected from server");
      setSocket(null);
    };
    return () => {
      ws.close();
    };
  }, []);
  
  return socket;
};
