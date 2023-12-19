// emailService.js
import nodemailer from 'nodemailer';

class EmailService {
  constructor(emailConfig) {
    this.transporter = nodemailer.createTransport(emailConfig);
  }

  async sendEmail(to, subject, text) {
    const mailOptions = {
      from: 'your-email@example.com',
      to,
      subject,
      text,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}

export default EmailService;
