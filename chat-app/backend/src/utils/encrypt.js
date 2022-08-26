const crypto = require("crypto-js");
const { SECRET } = process.env;

const encrypt = async (_value) => crypto.AES.encrypt(_value, SECRET).toString();

const decrypt = async (_encrypted_data) => {
    if(!_encrypted_data) return null;
    
    const bytes = crypto.AES.decrypt(_encrypted_data, SECRET);
    return bytes.toString(crypto.enc.Utf8);
};

module.exports = {
    encrypt,
    decrypt
};