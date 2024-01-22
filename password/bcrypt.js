const bcrypt = require("bcryptjs");

const newHashMethod = async (str) => {
  const result = await bcrypt.hash(str, 10);
  return result;
};

// Wrong
const result = newHashMethod("Aanshu");
console.log({ result });

// Right way
const extractValue = async () => {
  const newRes = await newHashMethod("Aanshu");
  console.log({ newRes });
};

extractValue();

// method 3

const hashPw = (string) => {
  return bcrypt.hashSync(string, 10);
};

const comparePw = (string, hash) => {
  return bcrypt.compareSync(string, hash);
};

module.exports = { hashPw, comparePw };
