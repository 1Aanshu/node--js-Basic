const { hashPw, comparePw } = require("./bcrypt");

const hashedPw = hashPw("Aanshu");
const result = comparePw("Aanshu", hashedPw);

console.log({ result });

const mailer = require("./nodemailer");

const message = {
  from: "aanshu2dwiwedi@gmail.com",
  to: "dwiwediukmsag@gmail.com",
  subject: "Namaste",
  html: "<h1>Namaskar</h1>",
  attachments: [
    {
      filename: "tree.png",
      path: "tree.png",
      contentType: "Image/png",
    },
  ],
};

const mailFunction = async (message) => {
  const result = await mailer.sendMail(message);
  console.log(result);
};

mailFunction(message);
