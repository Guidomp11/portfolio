const express = require("express");
const router = express.Router();
const chatsController = require("../controllers/chats.controller.js")

router.get("/", chatsController.getChats);
router.get("/:chatId", chatsController.getChat);

module.exports = router;