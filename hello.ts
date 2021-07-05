import http from "http";

http
  .createServer(function (request, response) {
    response.end("Hello World");
  })
  .listen(3000);

console.log("Server running at http://127.0.0.1:3000/");
