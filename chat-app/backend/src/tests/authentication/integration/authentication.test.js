const request = require("supertest");
const { STATUS } = require("../../../constants");
const app = require("../../../index");
const { encrypt } = require("../../../utils/encrypt");

describe("Authentication Endpoints Test", () => {

    const BODY = {
        email: "test@email.com",
        username: "test-username",
        password: "test-password-123",
        avatar: "test-avatar",
    };

    const CREDENTIALS = {
        email: "test@email.com",
        password: "test-password-123",
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

        it("should not create user. Forbidden fields null", async () => {
            const res = await request(app).post("/api/auth/register").send({ user: { ...BODY, email: null } });

            expect(res.statusCode).toEqual(STATUS.SERVER_ERROR);
            expect(res.body).toHaveProperty("success");
            expect(res.body).toHaveProperty("message");
            expect(res.body.success).toEqual(false);
        });

        it("should not create user. Email already in use", async () => {
            const res = await request(app).post("/api/auth/register").send({ user: BODY });

            expect(res.statusCode).toEqual(STATUS.SERVER_ERROR);
            expect(res.body).toHaveProperty("success");
            expect(res.body).toHaveProperty("message");
            expect(res.body.success).toEqual(false);
        });
    });

    describe("Login", () => {
        it("should login user", async () => {
            const res = await request(app).post("/api/auth/login").send({ credentials: CREDENTIALS });
            
            expect(res.statusCode).toEqual(STATUS.OK);
            expect(res.body).toHaveProperty("success");
            expect(res.body).toHaveProperty("user");
            expect(res.body.success).toEqual(true);
        });

        it("should not login user. User not found", async () => {
            const res = await request(app).post("/api/auth/login").send({ credentials: { email: "fake@test.com", password: "fake-123" } });
            
            expect(res.statusCode).toEqual(STATUS.SERVER_ERROR);
            expect(res.body).toHaveProperty("success");
            expect(res.body.success).toEqual(false);
        });
    });
});