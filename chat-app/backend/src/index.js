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
const authRouter = require("./authentication/index.routes");
app.use("/api/auth", authRouter);
//#endregion

//#region EVENTS

//#endregion

module.exports = app;