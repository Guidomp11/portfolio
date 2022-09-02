const db = require("../database/models");
const { STATUS } = require("../constants");

const getChats = async (user_id) => {
    try {
        const _chats = await db.User_chat.findAll({
            where: { user_id },
            include: [
                { 
                    association: "a_chat_user",
                    attributes: ["avatar", "username"],
                    include: [{
                        association: "user_messages",
                        attributes: ["owner_id", "message"],
                    }],                
                },
                { association: "a_user_chats", attributes: ["name"] },
            ]
        });

        if(!_chats) return [];
        
        return _chats.map(_chat => _chat.get({plain: true}));
    }catch(error) {
        throw { status: STATUS.SERVER_ERROR, message: error.message };
    }
};

const getMessages = async (chat_id) => {

};

module.exports = {
    getChats,
    getMessages,
};