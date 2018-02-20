const {
  displayCountdown
} = require("./views");

const timer = seconds => {
  // Your code here...
  let countdown = setInterval(() => {
    displayCountdown(printSeconds(seconds))
    seconds--
    if (seconds < 0) {
      clearInterval(countdown)
    }
  }, 1000)

  function printSeconds(seconds) {
    let minutes = Math.floor(seconds / 60)
    let secs = seconds % 60
    if (minutes < 10 && secs < 10) {
      return minutes = '0' + minutes + ' : ' + '0' + secs
    }else if (minutes < 10) {
      return ('0' + minutes + ' : ' + secs)
    }else if (secs < 10) {
      return (minutes + ' : ' + '0' +secs);
    }
  }
};

module.exports = {
  timer
};