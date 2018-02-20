const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = data => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(`${data}`)))
};

module.exports = { displayCountdown };
