import express from 'express';
import cors from 'cors';
import { sendContactEmail } from '../lib/contactApi.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, message: 'Contact API is running.' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields.' });
  }

  try {
    await sendContactEmail({ name, email, message });
    res.json({ success: true, message: 'Your message has been sent successfully.' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ success: false, message: 'Unable to send message right now. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Contact server running on http://localhost:${PORT}`);
});
