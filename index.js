const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello world,Aanshu");
  })
  .listen(8000);

console.log("Server running at port 8000");

const myModule = require("./library");

const result = myModule.mul(1024, 1024);
const resultsub = myModule.sub(1024, 1048);
const resultsum = myModule.sum(3, 4);

console.log({ result, resultsub, resultsum });
// Craete another library that convert string to uppercase

// Create another library that show current date and time

const myModule1 = require("./timelibrary");

const result1 = myModule1.getTime();

// Create another library that converts Fahreheit temp to celcius

// Create another library that convert m to cm 