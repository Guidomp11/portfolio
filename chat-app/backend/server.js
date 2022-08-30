require('dotenv').config();

const app = require('./src');
const http = require('http');
const socketIoApp = require('./src/socketIO');

const httpServer = http.createServer(app);
socketIoApp(httpServer);

httpServer.listen(process.env.PORT || 4000);