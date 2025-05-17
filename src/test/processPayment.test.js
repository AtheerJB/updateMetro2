const processPayment = require('../processPayment');

describe("Process Payment", () => {
  test("Valid payment info", () => {
    expect(processPayment({ card: "4111111111111111", method: "Apple Pay" }))
      .toBe("Payment successful");
  });

  test("Missing payment method", () => {
    expect(processPayment({ card: "4111111111111111", method: "" }))
      .toBe("Error: Choose a payment method");
  });

  test("Invalid card", () => {
    expect(processPayment({ card: "1234", method: "Apple Pay" }))
      .toBe("Error: Invalid card");
  });

  test("Simulated failure without retry", () => {
    expect(processPayment({ card: "4111111111111111", method: "Apple Pay", simulateFailure: true }))
      .toBe("Error: Payment failed, try again");
  });

  test("Simulated failure with retry", () => {
    expect(processPayment({ card: "4111111111111111", method: "Apple Pay", simulateFailure: true, retry: true }))
      .toBe("Payment successful");
  });
});