const request = require("supertest");
const { STATUS } = require("../../../Rest/constants");
const app = require("../../../Rest");
const JWTGenerator = require("../../../Rest/utils/JWTGenerator");
const { createUser } = require("../../../services/authentication.service");

describe("Chats Endpoint Test", () => {
    let USER_TEST;

    beforeAll(async () => {
        USER_TEST = await createUser({
            email: "fake@email.com",
            password: "test-password-123",
            username: "fake-username",
            avatar: "test-avatar",
        });
    });

    describe("GET CHATS", () => {
        it("should get list of chats from user", async () => {
            await JWTGenerator({
                user: { id: USER_TEST.id }
            },
                async (token) => {
                    const res = await request(app).get("/api/chats").set("authorization", token);

                    expect(res.statusCode).toEqual(STATUS.OK);
                    expect(res.body).toHaveProperty("success");
                    expect(res.body.success).toEqual(true);
                },
                ({ status, error }) => {
                    expect(status).toEqual(STATUS.SERVER_ERROR);
                }
            );
        });
        it("should not authorize. Empty token", async () => {
            const res = await request(app).post("/api/chats");
            
            expect(res.statusCode).toEqual(STATUS.UNAUTHORIZED);
            expect(res.body).toHaveProperty("success");
            expect(res.body.success).toEqual(false);
        });
    });

    describe("GET CHAT", () => {
        it("should get list of chats from user", async () => {
            await JWTGenerator({
                user: { id: USER_TEST.id }
            },
                async (token) => {
                    const res = await request(app).get("/api/chats/1").set("authorization", token);

                    expect(res.statusCode).toEqual(STATUS.OK);
                    expect(res.body).toHaveProperty("success");
                    expect(res.body.success).toEqual(true);
                },
                ({ status, error }) => {
                    expect(status).toEqual(STATUS.SERVER_ERROR);
                }
            );
        });
        it("should not authorize. Empty token", async () => {
            const res = await request(app).post("/api/chats/1");
            
            expect(res.statusCode).toEqual(STATUS.UNAUTHORIZED);
            expect(res.body).toHaveProperty("success");
            expect(res.body.success).toEqual(false);
        });
        it("should not authorize. Empty token", async () => {
            await JWTGenerator({
                user: { id: USER_TEST.id }
            },
                async (token) => {
                    const res = await request(app).post("/api/chats/fakeID").set("authorization", token);
            
                    expect(res.statusCode).toEqual(STATUS.BAD_REQUEST);
                    expect(res.body).toHaveProperty("success");
                    expect(res.body.success).toEqual(false);
                },
                ({ status, error }) => {
                    expect(status).toEqual(STATUS.SERVER_ERROR);
                }
            );
        });
    });
});