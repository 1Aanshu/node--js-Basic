// Go to nodemailer.com
// npm i nodemailer
// find the email sending code
// SMTP milaunu paryo with google
// username and password (app password for gmail)
// run the code

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "aanshu2dwiwedi@gmail.com",
    pass: process.env.PASSWORD,
  },
});

const sendMail = async ({ from, to, subject, html, attachments }) => {
  const message = {
    from,
    to,
    subject,
    text: "Learn about Nodemailer!",
    html,
    attachments,
  };

  const result = await transporter.sendMail(message);
  return result.messageId;
};

module.exports = { sendMail };

//attachment

// env variable (dotenv package)
