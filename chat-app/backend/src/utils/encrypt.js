const crypto = require("crypto-js");
const { SECRET } = process.env;

const SECRET_STRING = SECRET.toString();

const encrypt = async (_value) => await crypto.AES.encrypt(_value, SECRET_STRING).toString();

const decrypt = async (_encrypted_data) => {
    if(!_encrypted_data) return null;
    
    const bytes = await crypto.AES.decrypt(_encrypted_data, SECRET_STRING);
    return bytes.toString(crypto.enc.Utf8);
};

module.exports = {
    encrypt,
    decrypt
};