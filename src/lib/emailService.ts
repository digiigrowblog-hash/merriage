import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password',
  },    
})

const sendEmail = async (
  to: string,
  subject: string,
  html: string
) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to,
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
}

export default sendEmail;
