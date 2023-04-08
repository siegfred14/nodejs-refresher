// In  node, we write code to create a server and listen for requests coming in from the browser
// Unlike php which has programs that automatically do this like apache, in node, it is created manually

// to create a server, we can name the file anything, not necessarily server.js

const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("request made");
// });
// in the callback, we get access to two objects
// 1. the request object (comest with info such as the url, request type: get, post..)
// 2. the response object (used to send a response to the client)

// To listen to the request made
// server.listen(3000, "localhost", () => {
//   console.log("listening for request on port 3000");
// });

// Localhost
// This is like a domain name on the web
// takes us to a special IP address called a loop back IP address
// it is 127.0.0.1 and it points directly back to own computer

// Port Number
// represents a specific channel, gateway or port
// they are like doors on a computer through which communication can be made to different programs like discord. skype, teams
// Our server needs it's own port as well

// Everytime we make a change, we need to restart our server
const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url, req.method);
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
