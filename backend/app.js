import { WebSocketServer } from 'ws';

import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200);
    res.end('Server is healthy');
  }
});

const wss = new WebSocketServer({ noServer: true });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    gameManager.addUser(ws);
  
    ws.on('message', function message(data) {
      console.log('Received message:', data);
    });
  
    ws.on('close', () => {
      console.log('Player disconnected');
      gameManager.removeUser(ws);
    });
  
    ws.send('Welcome to the Chess Game!');
  });
  
  server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });
  
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });