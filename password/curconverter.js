const CC = require("currency-converter-lt");

const currencyConverter = new CC({});
currencyConverter
  .from("USD")
  .to("GBP")
  .amount(125)
  .convert()
  .then((response) => {
    console.log(response);
  });
