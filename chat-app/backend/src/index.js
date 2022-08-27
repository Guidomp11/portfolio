const express = require("express");
const app = express();

//#region AUTHENTICATION ROUTES
const authRouter = require("./authentication/index.routes");
app.use("/api/auth", authRouter);
//#endregion

//#region EVENTS

//#endregion

module.exports = app;