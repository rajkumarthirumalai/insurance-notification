// main.js
import EmailService from './email/emailService.js';
import Scheduler from './scheduler.js';
import { Client } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

// Email Configuration
const emailConfig = {
  service: 'gmail',
  auth: {
    user: 'gokukaioken1000@gmail.com',
    pass: 'ptym cnme pklg xczl',
  },
};


// Initialize Services
const emailService = new EmailService(emailConfig);
// Initialize Scheduler
const scheduler = new Scheduler();

// Schedule Email Task
scheduler.scheduleTask('0 0 1 * *', async () => {
  const policyHolderEmail = 'policyholder@example.com';
  const emailSubject = 'Insurance Policy Update';
  const emailText = 'Dear policy holder, your insurance policy has been updated.';
  await emailService.sendEmail(policyHolderEmail, emailSubject, emailText);
  console.log('Email scheduled task executed.');
});


const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message', message => {
	if(message.body === 'ping') {
		message.reply('pong');
	}
});
 
 
client.initialize();

