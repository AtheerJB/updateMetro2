const modifyBooking = require('../src/modifyBooking');

describe("Modify Booking", () => {
  test("Price field is missing", () => {
    expect(modifyBooking({ price: "", email: "user@mail.com" }))
      .toBe("Error: Please fill in all fields");
  });

  test("Email is empty", () => {
    expect(modifyBooking({ price: "100", email: "" }))
      .toBe("Error: Please fill in all fields");
  });

  test("Invalid email format", () => {
    expect(modifyBooking({ price: "100", email: "not-an-email" }))
      .toBe("Error: Please enter a valid email");
  });

  test("All fields are correct", () => {
    expect(modifyBooking({ price: "120", email: "user@mail.com" }))
      .toBe("Booking modified successfully");
  });

  test("Negative price", () => {
    expect(modifyBooking({ price: "-50", email: "user@mail.com" }))
      .toBe("Error: Invalid price");
  });

  test("Boundary: price too low", () => {
    expect(modifyBooking({ price: "9", email: "user@mail.com" }))
      .toBe("Error: Price too low");
  });

  test("Boundary: lowest valid price", () => {
    expect(modifyBooking({ price: "10", email: "user@mail.com" }))
      .toBe("Booking modified successfully");
  });

  test("Boundary: highest valid price", () => {
    expect(modifyBooking({ price: "500", email: "user@mail.com" }))
      .toBe("Booking modified successfully");
  });

  test("Boundary: price exceeds limit", () => {
    expect(modifyBooking({ price: "501", email: "user@mail.com" }))
      .toBe("Error: Price exceeds limit");
  });
});