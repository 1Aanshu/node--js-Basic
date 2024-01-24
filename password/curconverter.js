const CC = require("currency-converter-lt");


const newCC = () => {
  currencyConverter
    .from("USD")
    .to("GBP")
    .amount(125)
    .convert()
    .then((response) => {
      console.log(response);
    });
};

currencyConverter = newCC();