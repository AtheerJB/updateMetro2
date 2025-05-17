function processPayment({ card, method, simulateFailure = false, retry = false }) {
  if (!method) return "Error: Choose a payment method";
  if (!/^4[0-9]{12}(?:[0-9]{3})?$/.test(card)) return "Error: Invalid card";
  if (simulateFailure && !retry) return "Error: Payment failed, try again";
  return "Payment successful";
}

module.exports = processPayment;