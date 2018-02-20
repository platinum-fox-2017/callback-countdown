const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

// const timer = require("./controller.js")

const displayCountdown = seconds => {
  clear();
  console.log(chalk.green(figlet.textSync("Countdown App")));
  // Your code here...
  console.log(chalk.cyan(figlet.textSync(seconds)));
};

module.exports = { displayCountdown };
