const { hashPw, comparePw } = require("./bcrypt");

const hashedPw = hashPw("Aanshu");
const result = comparePw("Aanshu", hashedPw);

console.log({ result });
