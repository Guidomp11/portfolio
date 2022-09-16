const db = require("../database/models");
const { STATUS } = require("../Rest/constants");

const getChats = async (user_id) => {
    try {
        const _chats = await db.User_chat.findAll({
            where: { user_id },
            include: [
                { 
                    association: "a_chat_user",
                    attributes: ["id", "avatar", "username"],
                    include: [{
                        association: "user_messages",
                        attributes: ["owner_id", "message"],
                        limit: 1
                    }],
                },
                { association: "a_user_chats", attributes: ["name"] },
            ]
        });
        
        if(!_chats) return [];
        
        return _chats.map(_chat => _chat.toJSON());
    }catch(error) {
        throw { status: STATUS.SERVER_ERROR, message: error.message };
    }
};

const getMessages = async (chat_id) => {
    try {
        const _messages = await db.Message.findAll({
            where: { chat_id },
            attributes: ["owner_id", "message"],
            include: [{ 
                association: "message_owner",
                attributes: ["username"]
            }]
        });

        return _messages;
    }catch(error) {
        throw { status: STATUS.SERVER_ERROR, message: error.message };
    }
};

const createMessage = async (message) => {
    try {
        return await db.Message.create(message);
    }catch(error) {
        throw { status: STATUS.SERVER_ERROR, message: error.message };
    }
};

const createChat = async (chat, user_id_a, user_id_b) => {
    try {
        if(user_id_a === user_id_b) throw { status: STATUS.BAD_REQUEST, error: "Cannot create a chat with one user" };

        const _chat = await db.Chat.create(chat);

        await db.User_chat.create({
            chat_id: _chat.id,
            user_id: user_id_a
        });

        await db.User_chat.create({
            chat_id: _chat.id,
            user_id: user_id_b
        });

        return _chat;
    }catch(error) {
        throw { status: STATUS.SERVER_ERROR, message: error.message };
    }
}

module.exports = {
    createMessage,
    createChat,
    getChats,
    getMessages,
};