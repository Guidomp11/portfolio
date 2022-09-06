import { setCookie, parseCookies } from "nookies";

const saveToken = (token) => {
    setCookie(null, "chatAppToken", token.toString());
}

const getToken = (context = null) => {
    const { chatAppToken } = parseCookies(context);

    return chatAppToken;
}

export {
    saveToken,
    getToken
};