const express = require("express");

// The express app
const app = express();

// Register view engine
app.set("view engine", "ejs");
// app.set("views", "newViews"); //setting a different view folder for express

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    { title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet." },
    { title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet." },
    { title: "Defeat bowser again ", snippet: "Lorem ipsum dolor sit amet." },
  ];

  res.render("index", { title: "Home", blogs: blogs }); // pass an object for multiple data info
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "Error Page" });
});
