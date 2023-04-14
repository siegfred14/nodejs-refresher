const http = require("http");
const fs = require("fs");
const _ = require("lodash"); // we can use anything in place of _

const server = http.createServer((req, res) => {
  // lodash
  const num = _.random(0, 20);
  console.log(num);

  //   setting a function to run once with lodash
  // normal function
  const greet = () => {
    console.log("Hello");
  };

  // To run once with lodash
  const greet1 = _.once(() => {
    console.log("Hello");
  });

  greet1();
  greet1();
  //   this does not allow us to call the function more than once

  //   set header content type
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
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
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

// To install dependencies listed in a package.json from a shared/cloned project
// just run
// npm install
