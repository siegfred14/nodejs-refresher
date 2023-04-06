// In  node, we write code to create a server and listen for requests coming in from the browser
// Unlike php which has programs that automatically do this like apache, in node, it is created manually

// to create a server, we can name the file anything, not necessarily server.js

const http = require("http");

const server = http.createServer(() => {
  console.log("response made");
});
// in the callback, we get access to two objects
// 1. the request object (comest with info such as the url, request type: get, post..)
// 2. the response object (used to send a response to the client)

// To listen to the request made
server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
