const express = require("express");

// The express app
const app = express();

// listen for requests
app.listen(3000);

app.get("/contact", (req, res) => {
  //   res.send("<p>Contact Page</p>");
  //This replaces res.write, and automatically detects the content type, hence no need for setHeader
  // It also automatically infers the status code (200, 301, 404)
});

// RESPONDING TO MULTIPLE HTML PAGES
// we could repeat same process for multiple request as such

// app.get("/about", (req, res) => {
//     res.send("<p>About Page</p>");
//   });
// app.get("/contact", (req, res) => {
//     res.send("<p>Contact Page</p>");
//   });

//   Or to respond with a file
// we must specify the root, else it would search file from computer default root
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
//   another way is to use the core module to join the pathname with the root

// Redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});
