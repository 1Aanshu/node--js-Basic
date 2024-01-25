const event = require("events");
const eventEmitter = new event.EventEmitter();

// define a function
// initialize the event with .on method
// call the event function

const discount = (percent) => {
  console.log(`I heard ${percent}% discount command`);
  eventEmitter.emit("shopping", 10);
};

const shopping = (percent) => {
  console.log(`You got ${percent}% discount`);
};

eventEmitter.on("discount", (percent) => {
  discount(percent);
});
eventEmitter.on("shopping", (percent) => {
  shopping(percent);
});

eventEmitter.emit("discount", 20);
