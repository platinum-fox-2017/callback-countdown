const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = display => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  console.log(chalk.redBright(figlet.textSync(display)))
};

module.exports = { displayCountdown };
