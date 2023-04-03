// Global object

// in JS, the global object is window, but in nodejs, it is global

// console.log(global);

// global.setTimeout(() => {
//   console.log("testing the timeout");
// }, 3000);

// so just like in js where we dont have to add window to the browser functions, we dont need to add "global" either in nodejs

setTimeout(() => {
  console.log("testing the timeout");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("testing the interval");
}, 1000);
