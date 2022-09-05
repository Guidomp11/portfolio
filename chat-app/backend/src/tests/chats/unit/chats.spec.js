const {
    createMessage,
    createChat,
    getChats,
    getMessages
} = require("../../../services/chats.service");

const {
    createUser
} = require("../../../services/authentication.service");

const { CHATS, MESSAGES } = require("../utils");

describe("Chats Service Test", () => {
    let CHAT;
    let USER;
    let USER2;

    beforeAll(async () => {
        USER = await createUser({
            email: "unit-chat-test@email.com",
            username: "unit-chat-test-username",
            password: "unit-chat-test-password-123",
            avatar: "test-avatar-chat",
        });
        USER2 = await createUser({
            email: "unit-chat-2-test@email.com",
            username: "unit-chat-2-test-username",
            password: "unit-chat-2-test-password-123",
            avatar: "test-avatar-chat-2",
        });
        CHAT = await createChat({
            name: null
        }, USER.id, USER2.id);
    });

    describe("Create Message", () => {
        test("Should create a new Message", async () => {
            const _message = await createMessage({
                owner_id: USER.id,
                chat_id: CHAT.id,
                message: "This is a test message"
            });

            expect(_message).toHaveProperty("message");
            expect(_message.message).toBe("This is a test message");
        });
    });

    describe("Create Chat", () => {
        test("Should create a chat with a Name", async () => {
            const _chat = await createChat({ name: "Test Chat" }, USER.id, USER2.id);
            expect(_chat).toHaveProperty("name");
            expect(_chat.name).toBe("Test Chat");
        });
    });

    describe("Get Chats", () => {
        test("Should get user chats", async () => {
            const _chats = await getChats(USER.id);
            expect(_chats[0]).toHaveProperty("a_chat_user");
            expect(_chats[0].a_chat_user).toHaveProperty("user_messages");
        });

        test("Should not get chats from unknown user", async () => {
            const _chats = await getChats("fake-user");
            expect(_chats).toHaveLength(0);
        });
    });

    describe("Get User Messages", () => {
        test("Should get User messages", async () => {
            const _messages = await getMessages(CHAT.id);
            expect(_messages).toHaveLength(1);
        });

        test("Should not get messages from Fake Chat", async () => {
            const _messages = await getMessages("Fake-chat");
            expect(_messages).toHaveLength(0);
        });
    });
});