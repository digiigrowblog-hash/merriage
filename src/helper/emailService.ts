import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_EMAIL_PASSWORD,
  },    
})
console.log(process.env.USER_EMAIL ,"user")
console.log(process.env.USER_EMAIL_PASSWORD ,"pass")

const sendEmail = async (
  to: string,
  subject: string,
  html: string
) => {
  const mailOptions = {
    from: process.env.USER_EMAIL,
    to,
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
}

export default sendEmail;
