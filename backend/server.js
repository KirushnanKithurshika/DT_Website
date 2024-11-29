require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;  // Use the port from environment variables

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST route to handle email sending
app.post('/send-quote', async (req, res) => {
  const { name, phone, address, email, message } = req.body;

  try {
    // Create a Nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Use the email from .env file
        pass: process.env.EMAIL_PASS,  // Use the password from .env file
      },
    });

    // Email options
    const mailOptions = {
      from: email,  // User's email as the sender
      to: process.env.RECIPIENT_EMAIL,  // Use recipient email from .env (static or fallback)
      subject: 'New Quote Request',
      html: `
        <h3>New Quote Request Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
