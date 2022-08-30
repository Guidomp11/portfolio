const { Server } = require("socket.io");

module.exports = (server) => {
    if(!server) return;

    const IO = new Server(server);

    IO.on("connection" , (socket) => {
        console.log("User connected");

        
    });
};