function loginWithCaptcha({ email, password, attempts = 0, CAPTCHA }) {
  const correctEmail = "user@mail.com";
  const correctPassword = "pass123";
  const correctCAPTCHA = "correct";

  if (attempts < 3) {
    return (email === correctEmail && password === correctPassword)
      ? "Login successful" : "Error: Invalid credentials";
  }

  if (!CAPTCHA) return "Error: CAPTCHA required";
  if (CAPTCHA !== correctCAPTCHA) return "Error: Incorrect CAPTCHA";
  return (email === correctEmail && password === correctPassword)
    ? "Login successful" : "Error: Invalid credentials";
}
module.exports = loginWithCaptcha;