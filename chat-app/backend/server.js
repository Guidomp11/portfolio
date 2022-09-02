require('dotenv').config();

const app = require('./src');
const http = require('http');
const WebSocketServer = require('./src/WebSocketServer');

const httpServer = http.createServer(app);
WebSocketServer(httpServer);

httpServer.listen(process.env.PORT || 4000);