const { STATUS } = require("../constants");
const { createUser, authenticateUser, validateLogin } = require("../../services/authentication.service");
const JWTGenerator = require("../utils/JWTGenerator");

module.exports = {
    register: async (req, res) => {
        try {
            const { user } = req.body;

            if(!user) throw {status: STATUS.BAD_REQUEST, message: "User information incomplete." };

            const _user = await createUser(user);
            
            await JWTGenerator({
                user: { id: _user.id }
            },
                (token) => {
                    return res.status(STATUS.CREATED).json({
                        success: true,
                        user: {
                            token,
                            ..._user
                        }
                    });
                },
                ({ status, error }) => {
                    return res.status(status).json({
                        success: false,
                        message: error
                    });
                }
            );
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

            await JWTGenerator({
                user: { id: _user.id }
            },
                (token) => {
                    return res.status(STATUS.OK).json({
                        success: true,
                        user: {
                            token,
                            ..._user
                        }
                    });
                },
                ({ status, error }) => {
                    return res.status(status).json({
                        success: false,
                        message: error
                    });
                }
            );
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
            if(!req.user || !req.user.id) throw { status: STATUS.BAD_REQUEST, message: "Empty token." };

            const _user = await authenticateUser(req.user.id);

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