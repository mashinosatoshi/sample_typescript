import http from "http";
import connect from "connect";
import serveStatic from "serve-static";

const app = connect().use(serveStatic('./static'))

http.createServer(app).listen(3000)

console.log("Server running at http://127.0.0.1:3000/");
