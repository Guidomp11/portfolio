const { STATUS } = require("../constants");
const { createUser, authenticateUser, validateLogin } = require("../services/authentication.service");

module.exports = {
    register: async (req, res) => {
        try {
            const { user } = req.body;

            if(!user) throw new Error({ status: STATUS.BAD_REQUEST, message: "User information incomplete." });

            const _user = await createUser(user);

            return res.status(STATUS.CREATED).json({
                success: true,
                user: _user
            });
        }catch(error) {
            const status = error.status || STATUS.SERVER_ERROR;
            return res.status(status).json({
                success: false,
                message: error.message
            });
        }
    },
    login: async (req, res) => {
        try {
            const { credentials } = req.body;

            const _user = await validateLogin(credentials);

            return res.status(STATUS.OK).json({
                success: true,
                user: _user
            });
        }catch(error) {
            const status = error.status || STATUS.SERVER_ERROR;
            return res.status(status).json({
                success: false,
                message: error.message
            });
        }
    },
    authenticate: async (req, res) => {
        try {
            const { token } = req.headers["Authorization"];

            if(!token) throw new Error({ status: STATUS.BAD_REQUEST, message: "Empty token." });

            const _user = await authenticateUser(token);

            return res.status(STATUS.OK).json({
                success: true,
                user: _user
            });
        }catch(error) {
            const status = error.status || STATUS.SERVER_ERROR;
            return res.status(status).json({
                success: false,
                message: error.message
            });
        }
    }
};