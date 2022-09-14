const request = require("supertest");
const { STATUS } = require("../../../Rest/constants");
const app = require("../../../Rest");

describe("Chats Endpoint Test", () => {
    describe("GET CHATS", () => {
        it("should get list of chats from user", async () => {
            const res = await request(app).get("/api/chats");
        });
    });
});