const { displayCountdown } = require("./views");

// let invertal = setInterval((seconds) => {
//   timer(seconds)
// }, 1000)

// let stop = () => {
//   clearInterval(interval)
// }

const timer = seconds => {
  // Your code here...
  let interval = setInterval(() => {
    if (seconds < 1) {
      clearInterval(interval)
    }
    let minute = Math.floor(seconds / 60)
    let second = Math.floor(seconds % 60)
    if (minute < 10) {
      minute = '0' + minute
    }
    if (second < 10) {
      second = '0' + second
    }
    displayCountdown(minute, second)
    seconds -= 1
  }, 1000)
};

module.exports = {
  timer
};
