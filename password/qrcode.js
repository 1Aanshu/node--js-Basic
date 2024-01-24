const QRCode = require("qrcode");

const qrCode = async () => {
  const result = await QRCode.toString("I am a pony!", { type: "terminal" });
  console.log(result);
};
qrCode();
