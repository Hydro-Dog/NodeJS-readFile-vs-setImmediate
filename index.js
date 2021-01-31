const fs = require("fs");

let eventLoopCounter = 0;

setImmediate(function incrementEventLoopCounter() {
  eventLoopCounter++;
  console.log("eventLoopCounter: ", eventLoopCounter);
  if (eventLoopCounter < 10) {
    setImmediate(incrementEventLoopCounter);
  }
});

fs.readFile("aaa.jpg", (err, data) => console.log("fs"));
setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
