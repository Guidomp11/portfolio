const {
  createUser,
  validateLogin,
  authenticateUser,
  findUserByEmail,
  findUserById
} = require("../../../services/authentication.service");

describe("Authentication Tests", () => {

  const USER = {
    email: "test@email.com",
    username: "test-username",
    password: "test-password-123",
    avatar: "test-avatar",
  };

  beforeEach(async () => {
    console.log("BEFORE EACH TEST");
  });

  test('Should register a user', async () => {
    
  });
});