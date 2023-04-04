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
// Takes in 3 arguments
// 1. the string for the file location to be read
// 2. the data/text you want to write. this replaces the existing text
// 3. an assynchronous function
fs.writeFile("./docs/test_file.txt", "Salut Lavaloise et Lavalois", () => {
  console.log("update written");
});

// if we do this with a file that does not exist, it will just create the new file
fs.writeFile("./docs/test_file2.txt", "Salut Quebecoise et Quebecois", () => {
  console.log("update written");
});

// DIRECTORIES
// if you were to create a directory, it would have 2 parts
// 1. the path and name of the directory
// 2. A callback function, which takes err as a parameter in case

// fs.mkdir("./assests", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("new folder created");
// });
// NB: this is for only directories, not files

// to avoid error of attempting to create an existing directory,
if (!fs.existsSync("./assests")) {
  fs.mkdir("./assests", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("new folder created");
  });
} else {
  fs.rmdir("./assests", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("assets folder deleted");
  });
}

// DELETING FILES
