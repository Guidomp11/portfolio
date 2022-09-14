require("dotenv").config();

const jwt = require("jsonwebtoken");
const { STATUS } = require("../constants");
const { encrypt } = require("./encrypt");
const { JWT_SECRET } = process.env;

module.exports = async (payload, onSuccess, onFailed) => {
    jwt.sign(payload, JWT_SECRET, {
        expiresIn: "30d"
    }, async (error, token) => {        
        if(error) onFailed({ status: STATUS.SERVER_ERROR, message: "Cannot generate JWT" });
        
        const _encrypted_token = await encrypt(token);
        onSuccess(_encrypted_token);
    });
}