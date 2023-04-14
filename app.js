const express = require("express");

// The express app
const app = express();

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  res.send(<p>Home Page</p>);
  //This replaces res.write, and automatically detects the content type, hence no need for setHeader
  // It also automatically infers the status code (200, 301, 404)
});
