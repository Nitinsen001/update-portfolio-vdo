import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}[character]));

export async function sendContactEmail({ name, email, message }) {
  const host = process.env.EMAIL_HOST || 'smtp.gmail.com';
  const port = Number(process.env.EMAIL_PORT || 465);
  const user = process.env.EMAIL_HOST_USER;
  const password = process.env.EMAIL_HOST_PASSWORD;
  const recipient = process.env.CONTACT_EMAIL || 'nitinsen70671@gmail.com';

  if (!user || !password) {
    throw new Error('Missing EMAIL_HOST_USER or EMAIL_HOST_PASSWORD environment variable.');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br />');

  await transporter.sendMail({
    from: user,
    to: recipient,
    replyTo: email,
    subject: `New contact message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<h3>New contact message</h3><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong></p><p>${safeMessage}</p>`,
  });
}
