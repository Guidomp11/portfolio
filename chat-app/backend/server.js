require('dotenv').config();

const app = require('./src');
const http = require('http');

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT || 4000);