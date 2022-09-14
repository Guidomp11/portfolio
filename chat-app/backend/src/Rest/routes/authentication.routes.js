const express = require("express");
const router = express.Router();
const controller = require("../controllers/authentication.controller");
const authenticationMiddleware = require("../middlewares/authentication.middleware");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/authenticate", authenticationMiddleware, controller.authenticate);

module.exports = router;