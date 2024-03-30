const fs = require("fs");

const ITERATIONS_MAX = 2;
let iteration = 0;
Promise.resolve().then(() => {
  // Microtask callback runs AFTER mainline, even though the code is here
  console.log("Promise.resolve.then", "MAINLINE MICROTASK");
});
setTimeout(() => {
  console.log("setTimeout", "MAINLINE MACROTASK", "TIMERS PHASE");
  process.nextTick(() => {
    console.log("setTimeout.process.nextTick", "setTimeout MICROTASK");
  });
});
setImmediate(() => {
  console.log("setImmediate", "MAINLINE MACROTASK", "CHECK PHASE");
});

fs.readdir("./src", (err, files) => {
  if (err) throw err;
  console.log(
    "fs.readdir() callback: Directory contains: " + files.length + " files",
    "MAINLINE POLL PHASE"
  );
  Promise.resolve().then(() => {
    console.log(
      "setInterval.fs.readdir.Promise.resolve.then",
      "MAINLINE POLL PHASE MICROTASK"
    );
  });
});
console.log("START", "MAINLINE");
const timeout = setInterval(() => {
  console.log("START iteration " + iteration + ": setInterval", "TIMERS PHASE");
  if (iteration < ITERATIONS_MAX) {
    setTimeout((iteration) => {
      console.log(
        "TIMER EXPIRED (from iteration " +
          iteration +
          "): setInterval.setTimeout",
        "TIMERS PHASE"
      );
      Promise.resolve().then(() => {
        console.log(
          "setInterval.setTimeout.Promise.resolve.then",
          "TIMERS PHASE MICROTASK"
        );
      });
    }, 0);
    fs.readdir("./src", (err, files) => {
      if (err) throw err;
      console.log(
        "fs.readdir() callback: Directory contains: " + files.length + " files",
        "POLL PHASE"
      );
      Promise.resolve().then(() => {
        console.log(
          "setInterval.fs.readdir.Promise.resolve.then",
          "POLL PHASE MICROTASK"
        );
      });
    });
    setImmediate(() => {
      console.log("setInterval.setImmediate0", "CHECK PHASE");
      Promise.resolve().then(() => {
        console.log(
          "setInterval.setImmediate0.Promise.resolve.then",
          "CHECK PHASE MICROTASK"
        );
      });
    });
    setImmediate(() => {
      console.log("setInterval.setImmediate1", "CHECK PHASE");
      process.nextTick(() => {
        console.log(
          "setInterval.setImmediate1.process.nextTick",
          "CHECK PHASE MICROTASK"
        );
      });
    });
  } else {
    console.log("Max interval count exceeded. Goodbye.", "TIMERS PHASE");
    clearInterval(timeout);
  }
  console.log("END iteration " + iteration + ": setInterval", "TIMERS PHASE");
  iteration++;
}, 0);
console.log("END", "MAINLINE");