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

console.log(result);
