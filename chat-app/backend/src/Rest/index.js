const express = require("express");
const app = express();

//#region APP MIDDLEWARES
const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(helmet());
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({limit: '5mb'}));
//#endregion

//#region AUTHENTICATION ROUTES
const { authentication, chats } = require("./routes/index.routes");
const authenticationMiddleware = require("./middlewares/authentication.middleware");

app.use("/api/auth", authentication);
app.use("/api/chats", authenticationMiddleware, chats);
//#endregion

//#region EVENTS

//#endregion

module.exports = app;