const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  let minuteFormat = Math.floor(seconds / 60)
  if (minuteFormat < 10) {
    minuteFormat = `0${minuteFormat}`
  }
  let secondFormat = seconds % 60
  if (secondFormat < 10) {
    secondFormat = `0${secondFormat}`
  }
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(`${minuteFormat}:${secondFormat}`)));
  // Your code here...
};

module.exports = { displayCountdown };
