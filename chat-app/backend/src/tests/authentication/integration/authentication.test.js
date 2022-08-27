const request = require("supertest");
const { STATUS } = require("../../../constants");
const app = require("../../../index");

describe("Authentication Endpoints Test", () => {

    const BODY = {
        email: "test@email.com",
        username: "test-username",
        password: "test-password-123",
        avatar: "test-avatar",
    };

    describe("Register", () => {
        it("should create new user", async () => {
            const res = await request(app).post("/api/auth/register").send({ user: BODY });
            
            expect(res.statusCode).toEqual(STATUS.CREATED);
            expect(res.body).toHaveProperty("success");
            expect(res.body).toHaveProperty("user");
            expect(res.body.success).toEqual(true);
        });

        it("should not create user. Error: Bad Request", async () => {
            const res = await request(app).post("/api/auth/register").send({});
            
            expect(res.statusCode).toEqual(STATUS.BAD_REQUEST);
            expect(res.body).toHaveProperty("success");
            expect(res.body).toHaveProperty("message");
            expect(res.body.success).toEqual(false);
        });

    });
});