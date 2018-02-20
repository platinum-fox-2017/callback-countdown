const { displayCountdown } = require("./views");


const timer = seconds => {
  const interval = setInterval(() => {
    printTime();
  },1000)
  const printTime = () => {
    displayCountdown(seconds)
    seconds--;
    if (seconds < 0) {
      clearInterval(interval);
    }
  }
};

module.exports = {
  timer
};
