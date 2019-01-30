// connect this file to the build-in Node.js HTTP package
const http = require("http");

console.log("coucou this is my server!");

// create a Node.js server object (for accepting HTTP connections)
const server =
  // function will run whenever a client connects to us
  http.createServer((request, response) => {
    console.log("coucou CLIENT connected! " + request.url);

    if (request.url === "/") {
      // send home page content
      response.write("Welcome to the home page!");
      response.end();
    } else if (request.url === "/about") {
      // send about page content
      response.write("I'm Nizar and I like pizza.");
      response.end();
    } else {
      // send a 404 response
      response.statusCode = 404;
      response.write("404 Not Found");
      response.end();
    }
  });

// start accepting connections
server.listen(5555);
