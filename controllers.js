const { displayCountdown } = require("./views");

const timer = seconds => {
  let countdown = setInterval(function() {
    let minute = Math.floor(seconds/60)
    let second = seconds % 60
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second
    let jam = minute +' : '+second
    displayCountdown(jam)
    if(seconds === 0){
      clearInterval(countdown)
    }else{
      seconds--
    }
  }, 1000);
};

module.exports = {
  timer
};
