const express = require("express");

// The express app
const app = express();

// Register view engine
app.set("view engine", "ejs");
// app.set("views", "newViews"); //setting a different view folder for express

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  //   res.sendFile("./views/index.html", { root: __dirname });
  res.render("index"); // enter the filename without the extension
});

app.get("/about", (req, res) => {
  //   res.sendFile("./views/about.html", { root: __dirname });
  res.render("about");
});

// Redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

// 404 page
app.use((req, res) => {
  //   res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404");
});
