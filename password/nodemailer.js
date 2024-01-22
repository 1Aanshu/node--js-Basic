// Go to nodemailer.com
// npm i nodemailer
// find the email sending code
// SMTP milaunu paryo with google
// username and password (app password for gmail)
// run the code

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aanshu2dwiwedi@gmail.com",
    pass: "hggx dysy qnur xcwb",
  },
});

const mailOptions = {
  from: "aanshu2dwiwedi@gmail.com",
  to: "dwiwediukmsag@gmail.com",
  subject: "Nodemailer",
  text: "Learn about Nodemailer!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
