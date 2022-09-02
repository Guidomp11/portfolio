const { Server } = require("socket.io");

module.exports = (server) => {
    if(!server) return;

    const io = new Server(server);
    
    io.on("connection" , (socket) => {
        console.log("User connected");

        /*socket.on("get_chats", async (message) => {
            try {
                const chats = await getChats(message);

                socket
                console.log("RESULTS: ", chats[0].a_chat_user);
            }catch(error) {
                console.log("ERROR: ", error);
            }
        });*/
    });
};