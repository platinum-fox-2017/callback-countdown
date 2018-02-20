const { displayCountdown } = require("./views");
// const clear = require('clear')

const timer = seconds => {
  // Your code here...

  let clock = setInterval(function(){
    if (seconds === 0) {
      clearInterval(clock)
    }
    displayCountdown(seconds)
    seconds -= 1;
  }, 1000)
};

module.exports = {
  timer
};
