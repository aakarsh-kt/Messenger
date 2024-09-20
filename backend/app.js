// import { WebSocketServer } from 'ws';
// import express from 'express';
// import http from 'http';

// const app = express();
// const server = http.createServer(app);
// const wss = new WebSocketServer({ server });

// // This object will hold all active WebSocket connections for each user
// const clients = new Map();

// // Function to send a message to specific recipients in a chat (either group or 1-on-1)
// function sendMessageToRecipients(recipients, message) {
// //   console.log("here I am Bitch");
//   console.log(recipients)
//     recipients.forEach(recipientId => {
//         const client = clients.get(recipientId);
//         console.log(client);
//         console.log(client?.ws?.readyState);
//         console.log( WebSocket.OPEN)
//         if (client && client.ws.readyState === WebSocket.OPEN) {
//             console.log("It tried")
//             client.ws.send(JSON.stringify(message));
//         }
//     });
// }

// wss.on('connection', (ws) => {
//     console.log('A new client connected');

//     ws.on('message', (data) => {
//         const message = JSON.parse(data);

//         const { senderId, chatId, msg, recipients } = message;

//         // Store the connection if it's a new user or update existing connection
//         clients.set(senderId, { ws, chatId });

//         // Send the message only to the intended recipients
//         sendMessageToRecipients(recipients, { senderId, msg, timestamp: new Date() });

//         console.log(`User ${senderId} sent a message: "${msg}" to chat: ${chatId} for recipients: ${recipients}`);
//     });

//     ws.on('close', () => {
//         console.log('A client disconnected');
//         // Clean up clients map when the connection is closed
//         clients.forEach((client, clientId) => {
//             if (client.ws === ws) {
//                 clients.delete(clientId);
//             }
//         });
//     });
// });

// // Express endpoint to test server
// app.get('/', (req, res) => {
//     res.send("WebSocket server is running!");
// });

// server.listen(8080, () => {
//     console.log('WebSocket server is listening on port 8080');
// });

import { WebSocketServer } from 'ws';
import express from 'express';
import http from 'http';


const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// This object will hold all active WebSocket connections for each user
const clients = new Map();

// Function to send a message to specific recipients in a chat (either group or 1-on-1)
function sendMessageToRecipients(recipients, message) {
    console.log(message)
    recipients.forEach(recipientId => {
        const client = clients.get(recipientId);
        // console.log(client)
        if(message)
        if (client && client.ws.readyState === WebSocket.OPEN && recipientId!=message?.senderId) {
            client.ws.send(JSON.stringify(message));
        }
    });
}

// Function to notify about an incoming call
function sendCallNotification(userId, recipientId, roomId) {
    const client = clients.get(recipientId);
   console.log("sending notification")
//    console.log(clients)
//    console.log(client)
//    console.log(userId)
//    console.log(recipientId)
//    console.log(roomId)
    if (client) {
        // console.log("Notification Sent")
        client.ws.send(JSON.stringify({
            "type": 'call-invitation',
            "callerId": userId,
            "receiverId": recipientId,
            "roomId": roomId,
          
            // timestamp: new Date()
        }));
    }
}

wss.on('connection', (ws) => {
    console.log('A new client connected');
    ws.send(JSON.stringify({ type: 'ping' }));
    ws.on('message', (data) => {
        const message = JSON.parse(data);
        // console.log(message);   
        const { senderId, chatId, msg, recipients, type, callType, metadata } = message;

        // Store the connection if it's a new user or update existing connection
       
        clients.set(senderId, { ws, chatId });
        // if (type === 'call') {
        //     // Notify the recipient about the incoming call
        //     const { recipientId } = message;
        //     console.log(`User ${senderId} is calling ${recipientId}`);
        //     sendCallNotification(senderId, recipientId, callType, metadata);
        // }
        console.log(message);   
         if(message?.type=='call-invitation'){
            // const { call } = message;
            console.log(`User ${message.callerId} is calling ${message.receiverId}`);
            sendCallNotification(message.callerId, message.receiverId,message.roomId);
        }
        else {
            // Send the message only to the intended recipients (real-time chat)
            console.log(`User ${senderId} sent a message: "${msg}" to chat: ${chatId} for recipients: ${recipients}`);
            sendMessageToRecipients(recipients, { senderId, msg, timestamp: new Date() });
        }

       
    });

    ws.on('close', () => {
        console.log('A client disconnected');
        // Clean up clients map when the connection is closed
        clients.forEach((client, clientId) => {
            if (client.ws === ws) {
                clients.delete(clientId);
            }
        });
    });
});

// Express endpoint to test server
app.get('/', (req, res) => {
    res.send("WebSocket server is running!");
});

server.listen(8080, () => {
    console.log('WebSocket server is listening on port 8080');
});
