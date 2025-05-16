function modifyBooking({ price, email }) {
  if (!price || !email) {
    return "Error: Please fill in all fields";
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return "Error: Please enter a valid email";
  }

  const numericPrice = Number(price);
  if (isNaN(numericPrice) || numericPrice < 10 || numericPrice > 500) {
    return numericPrice < 10
      ? "Error: Price too low"
      : "Error: Price exceeds limit";
  }

  if (numericPrice < 0) {
    return "Error: Invalid price";
  }

  return "Booking modified successfully";
}

module.exports = modifyBooking;