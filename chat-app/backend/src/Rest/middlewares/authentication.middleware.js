require("dotenv").config();

const jwt = require("jsonwebtoken");
const { STATUS } = require("../constants");
const { decrypt } = require("../utils/encrypt");
const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
    try {
        const _token_encrypted = req.header("Authorization");
        const _token = await decrypt(token_encrypted);

        if(!_token) throw new Error("Invalid Token");

        const _encrypt = jwt.verify(_token, JWT_SECRET);
        req.user = _encrypt.user;
        
        next();
    }catch(error) {
        return res.status(STATUS.UNAUTHORIZED).json({
            success: false,
            message: "Invalid Token"
        });
    }
}