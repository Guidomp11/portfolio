const db = require("../database/models");
const { STATUS } = require("../constants");
const { encrypt, decrypt } = require("../utils/encrypt");

const findUserById = async (id) => {
    try {
        return await db.User.findByPk(id, {
            attributes: {exclude: ['password']}
        });
    }catch(error) {
        throw new Error({ status: STATUS.SERVER_ERROR, message: error.message });
    }
}

const findUserByEmail = async (_email) => {
    try {
        return await db.User.findOne({
            where: {
                email: _email
            }
        });
    }catch(error) {
        throw new Error({ status: STATUS.SERVER_ERROR, message: error.message });
    }
}

const createUser = async (user) => {
    try {
        const _user = await db.User.create(user);
        delete _user.password;
        return {
            ..._user,
            token: encrypt(_user.id)
        };
    }catch(error) {
        throw new Error({ status: STATUS.SERVER_ERROR, message: error.message });
    }
};

const authenticateUser = async (_token) => {
    try {
        const _decryted_id = decrypt(_token);

        const _user = await findUserById(_decryted_id);

        if(!_user) throw new Error({ status: STATUS.NOT_FOUND, message: "User not Found." });

        return _user;
    }catch(error) {
        throw new Error({ status: STATUS.SERVER_ERROR, message: error.message });
    }
}

const validateLogin = async (credentials) => {
    try {
        const { email, password } = credentials;

        const _user = await findUserByEmail(email);

        if(!_user) throw new Error({ status: STATUS.NOT_FOUND, message: "User not Found." });

        const _decryted_password = decrypt(password);

        if(password !== _decryted_password) throw new Error({ status: STATUS.NOT_FOUND, message: "User not Found." });

        delete _user.password;

        return {
            ..._user,
            token: encrypt(_user.id)
        };
    }catch(error) {
        throw new Error({ status: STATUS.SERVER_ERROR, message: error.message });
    }
}

module.exports = {
    createUser,
    authenticateUser,
    validateLogin
};