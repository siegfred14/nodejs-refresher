// WORKING WITH FILE SYSTEM CORE MODULE
// The file system core module allows us to perform CRUD operations in nodejs

// Importing the file system core module
const fs = require("fs");

// READING FILES
// takes 2 arguments
// the first takes in a string and it's a relative path to the file we want to read
// the second part takes a callback asynchronous function with 2 parameters. err and data

fs.readFile("./docs/test_file.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data); // with this, we get a buffer. To read the actual string in the testFile.txt, we use
  console.log(data.toString());
});

// This is assynchronous, however, it doesn't block other lines of code due to it's delay
console.log("last line of code");

// WRITING FILES
// DIRECTORIES
// DELETING FILES
