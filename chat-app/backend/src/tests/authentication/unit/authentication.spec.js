const {
  createUser,
  findUserByEmail,
  findUserById
} = require("../../../services/authentication.service");

describe("Authentication Tests", () => {

  let USER_1;

  beforeAll(async () => {
    USER_1 = await createUser({
      email: "unit-test@email.com",
      username: "unit-test-username",
      password: "unit-test-password-123",
      avatar: "test-avatar",
    });
  });

  describe('User finds', () => {
    it("should find user by ID", async () => {
      const result = await findUserById(USER_1.id);

      expect(result.password).toBeUndefined();
      expect(result.username).toBe(USER_1.username);
    });

    it("should find user by email", async () => {
      const result = await findUserByEmail(USER_1.email);
      
      expect(result.username).toBe(USER_1.username);
    });
  });
});