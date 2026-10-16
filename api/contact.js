import { sendContactEmail } from '../lib/contactApi.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

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
}
