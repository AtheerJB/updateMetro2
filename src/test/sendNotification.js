const sendNotification = require('../sendNotification');

describe("Send Notification", () => {
  test("Valid booking notification", () => {
    expect(sendNotification({ type: "booking", message: "Your booking is confirmed" }))
      .toBe("Notification shown: Booking Confirmed");
  });

  test("Valid cancel notification", () => {
    expect(sendNotification({ type: "cancel", message: "Booking cancelled" }))
      .toBe("Notification shown: Booking Cancelled");
  });

  test("Empty message", () => {
    expect(sendNotification({ type: "booking", message: "" }))
      .toBe("Error: Notification content missing");
  });

  test("Message too long", () => {
    const longMsg = "A".repeat(151);
    expect(sendNotification({ type: "booking", message: longMsg }))
      .toBe("Error: Message too long");
  });

  test("Unknown type", () => {
    expect(sendNotification({ type: "other", message: "Test" }))
      .toBe("Error: Unknown notification type");
  });
});