const login = require('../loginWithCaptcha');

describe("Login with CAPTCHA", () => {
  test("Correct credentials", () => {
    expect(login({ email: "user@mail.com", password: "pass123", attempts: 1 }))
      .toBe("Login successful");
  });

  test("Wrong password", () => {
    expect(login({ email: "user@mail.com", password: "wrong", attempts: 2 }))
      .toBe("Error: Invalid credentials");
  });

  test("Wrong CAPTCHA", () => {
    expect(login({ email: "user@mail.com", password: "pass123", attempts: 3, CAPTCHA: "wrong" }))
      .toBe("Error: Incorrect CAPTCHA");
  });

  test("Correct CAPTCHA", () => {
    expect(login({ email: "user@mail.com", password: "pass123", attempts: 3, CAPTCHA: "correct" }))
      .toBe("Login successful");
  });
});