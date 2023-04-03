// Global object

// in JS, the global object is window, but in nodejs, it is global

console.log(global);

global.setTimeout(() => {
  console.log("testing the timeout");
}, 3000);
