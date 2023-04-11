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
// const server = http.createServer((req, res) => {
//   // console.log(req);
//   console.log(req.url, req.method);
// });

// server.listen(3000, "localhost", () => {
//   console.log("listening for request on port 3000");
// });

// Response
// We formulate response headers which give the browser
// a little more info about what kind of response is coming back to it.

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   // Set header content type (3 steps)
//   res.setHeader("Content-Type", "text/plain");

//   res.write("Bienvenue Siegfreds");
//   res.end();
// });

// ------- Sending html instead of plain text -------
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   // Set header content type (3 steps)
//   res.setHeader("Content-Type", "text/html");

//   res.write("<p>Bienvenue au Canada Siegfreds</p>");
//   res.write("<p>Bienvenue a Quebec Siegfreds</p>");
//   res.end();
// });

// ------- Sending html files/docs instead of text -------
// 1. we import the file system
const fs = require("fs");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   // 2. Set header content type
//   res.setHeader("Content-Type", "text/html");
//   // 3. read the file and callback required action
//   fs.readFile("./views/index.html", (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end(); // So it doesn't keep hanging when there is an error
//     } else {
//       res.write(data);
//       res.end();
//       //  alternatively, if we are sending just one data, we could replace both lines with
//       res.end(data);
//     }
//   });
// });

// ....... BASIC ROUTING -------
// Here we want every path to link to a distinct page

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   res.setHeader("Content-Type", "text/html");

//   // 1. we define the general path
//   let path = "./views/";

//   // 2. we use a switch statement to evaluate possible cases of slashes
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       break;
//     case "/about":
//       path += "about.html";
//       break;
//     case "/contact":
//       path += "contact.html";
//       break;

//     default:
//       path += "404.html";
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     //now we replace the hard coded address with path
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.end(data);
//     }
//   });
// });

// server.listen(3000, "localhost", () => {
//   console.log("listening for request on port 3000");
// });

// STATUS CODES
// Status codes describe the type of response sent to the browser
// and how successful the request was

// 200 - OK
// 301 - Resource moved
// 404 - Not found
// 500 - Internal server error

// we have different ranges
// 100 range - information responses
// 200 range - success codes
// 300 range - codes for redirect
// 400 range - user or client error codes
// 500 range - server error codes

// Adding status codes to our example above
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact":
      path += "contact.html";
      res.statusCode = 200;
      break;

    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // we could add our status code here but it will persist for all cases
      // so it's best we add to each cases above
      //   res.statusCode = 200;
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});

// REDIRECTS
// Take for instance, we update the about_me to about me page, our website
// works fine. but for thousands of others that redirect to this page,
// they'll encouter a 404 error.
// To fix this, we add another case to our switch statement with '/about-me'
// enter a 301 status code
// remove path and setHeader to a response like
// res.setHeader('Location', '/about') as illustrated in 165 - 168
