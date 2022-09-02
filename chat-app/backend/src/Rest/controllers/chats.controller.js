const { STATUS } = require("../constants");
const { getChats, getMessages } = require("../../services/chats.service");

module.exports = {
    getChats: async (req, res) => {
        try {
            const { id } = req.user;

            if(!id) throw { status: STATUS.SERVER_ERROR, message: "Error getting user ID" };

            const _chats = await getChats(id);

            return res.status(STATUS.OK).json({
                success: true,
                chats: _chats
            });
        }catch(error) {
            const status = error.status || STATUS.SERVER_ERROR;

            return res.status(status).json({
                success: false,
                message: error.emssage
            });
        }
    },
    getChat: async (req, res) => {
        try {
            const { chatId } = req.params;

            if(!chatId) throw { status: STATUS.SERVER_ERROR, message: "ChatId is undefined" };

            const _messages = await getMessages(chatId);

            return res.status(STATUS.OK).json({
                success: true,
                messages: _messages
            });
        }catch(error) {
            const status = error.status || STATUS.SERVER_ERROR;

            return res.status(status).json({
                success: false,
                message: error.emssage
            });
        }
    }
};