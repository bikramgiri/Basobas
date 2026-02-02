const nodeemailer = require('nodemailer');

const sendEmail = async (options) => {
      try {
            var transporter = nodeemailer.createTransport({
                  service: 'gmail',
                  auth: {
                  user: process.env.EMAIL,
                  pass: process.env.EMAIL_PASSWORD,
                  },
            });
            const mailOptions = {
                  from: "Bikram Giri <process.env.EMAIL>",
                  to: options.email,
                  subject: options.subject,
                  text: "Your OTP is " + options.otp,
            };
      
            await transporter.sendMail(mailOptions);
      } catch (error) {
            console.error('Error sending email:', error);
      }
      };
      
      module.exports = sendEmail;