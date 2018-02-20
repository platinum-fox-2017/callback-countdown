const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let interval = setInterval(function(){
    if(seconds < 1){
      clearInterval(interval)
    }
    let minute = Math.floor(seconds / 60)
    if(minute < 10){
      minute = '0' + minute
    }
    let second = Math.floor(seconds % 60)
    if(second < 10){
      second = '0' + second
    }
    displayCountdown(minute, second)
    seconds--
  }, 1000)
};

module.exports = {
  timer
};
