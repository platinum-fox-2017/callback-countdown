const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");
const supportsColor = require('supports-color');


const displayCountdown = seconds => {
    clear();
    console.log(chalk.cyan(figlet.textSync("Countdown App")));
    console.log(chalk.rgb(100, 100, 100)(figlet.textSync(seconds)));
  };

module.exports = { displayCountdown };
