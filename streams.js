// Working with Large files
// Streams - start using date before it has finished loading
// buffer - little chunks of data, that are sent one at a time, which user can
// use, before the entirety is received. eg video on youtube

// types include read streams and write streams
const fs = require("fs");
const { Stream } = require("stream");

// to read from Stream.txt

// const readStream = fs.createReadStream("./docs/streams.txt"); // create the read stream
const readStream = fs.createReadStream("./docs/streams.txt", {
  encoding: "utf8",
});

readStream.on("data", (chunk) => {
  console.log(`.....new chunk.... \n`);
  console.log(chunk); // note that "chunk" could be any name
});

// .on is an event listener

// to convert streams to string, we use
// readStream.on("data", (chunk) => {
//   console.log(`.....new chunk.... \n`);
//   console.log(chunk.toString());
// });

// alternative method of conversion to string is to add encoding type on line 12
