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

// 404 page
// app.use((req, res) => {
//   res.sendFile("./views/404.html", { root: __dirname });
// });
// We use this function "use" to create and fire middleware in express
// the use funtion is going to fire for every request,
// If it finds a get request that matches, it sends this to the browser
// If it does not, it continues down
// if the request reaches this point of the code, only then will it send the 404
// So, since it workes with FIFO, the error code must be at the bottom, else it
// fires before the required get request.

// Now, this is not enough to tell the console that this is an error. we need to manually specify
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
