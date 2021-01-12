// Allow the code to create server

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // The req (request) will response when there is a specific event triggered in the server
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
  if (req.url === "/user") {
    res.write("Welcome my user");
    // Close the response
    res.end();
  }
});

server.listen(3000, () => console.log("Server is running"));
