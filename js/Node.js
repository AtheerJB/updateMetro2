// server.js
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

// Replace with your Twilio credentials
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = new twilio(accountSid, authToken);

app.use(bodyParser.json());

app.post('/send-sms', (req, res) => {
    const { phoneNumber, message } = req.body;

    client.messages.create({
        body: message,
        from: 'YOUR_TWILIO_PHONE_NUMBER',
        to: phoneNumber,
    })
    .then(message => res.status(200).send(`Message sent: ${message.sid}`))
    .catch(error => res.status(500).send(error));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
