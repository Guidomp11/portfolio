const db = require("../database/models");
const { STATUS } = require("../constants");
const { encrypt, decrypt } = require("../utils/encrypt");

const findUserById = async (id) => {
    try {
        return (await db.User.findByPk(id, {
            attributes: {exclude: ['password']}
        }))?.toJSON();
    }catch(error) {
        throw { status: STATUS.SERVER_ERROR, message: error.message };
    }
}

const findUserByEmail = async (_email) => {
    try {
        return (await db.User.findOne({
            where: {
                email: _email
            }
        }))?.toJSON();
    }catch(error) {
        throw { status: STATUS.SERVER_ERROR, message: error.message };
    }
}

const createUser = async (user) => {
    try {
        user.password = await encrypt(user.password);

        const _user = (await db.User.create(user))?.toJSON();
        delete _user.password;

        return {
            ..._user,
            token: encrypt(_user.id.toString())
        };
    }catch(error) {
        throw { status: STATUS.SERVER_ERROR, message: error.message };
    }
};

const authenticateUser = async (_token) => {
    try {
        const _decryted_id = await decrypt(_token);

        const _user = await findUserById(_decryted_id);

        if(!_user) throw { status: STATUS.NOT_FOUND, message: "User not Found." };

        return _user;
    }catch(error) {
        throw { status: STATUS.SERVER_ERROR, message: error.message };
    }
}

const validateLogin = async (credentials) => {
    try {
        const { email, password } = credentials;
        
        const _user = await findUserByEmail(email);
        
        if(!_user) throw { status: STATUS.NOT_FOUND, message: "User not Found." };

        const _decryted_password = await decrypt(_user.password);
        
        if(password !== _decryted_password) throw { status: STATUS.NOT_FOUND, message: "User not Found." };

        delete _user.password;

        return {
            ..._user,
            token: encrypt(_user.id.toString())
        };
    }catch(error) {
        throw { status: STATUS.SERVER_ERROR, message: error.message };
    }
}

module.exports = {
    createUser,
    authenticateUser,
    validateLogin,
    findUserByEmail,
    findUserById
};