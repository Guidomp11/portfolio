const { Server } = require("socket.io");

module.exports = (server) => {
    if(!server) return;

    const io = new Server(server);
    
    io.on("connection" , (socket) => {
        console.log("User connected");

        socket.on("get_chats", (message) => {
            console.log("GET: ", message)
        });
    });
};