const { displayCountdown } = require("./views");

const timer = seconds => {
  let count = setInterval(() => { 
    if(seconds === 0) {
      displayCountdown(`00:00`)
      clearInterval(count)
    } else {
      var min, sec;
      if(seconds < 10) {
        min = `00`
        sec = `0${seconds}`
      } else if(seconds < 60) {
        min = `00`
        sec = seconds
      } else if(seconds >= 60) {
        min = Math.floor(seconds/60)
        if(min < 10) {
          min = `0${min}`
        }
        sec = seconds % 60
        if(sec.toString().length === 1){
          sec = `0${sec}`
        }
      }
      displayCountdown(`${min}:${sec}`)
      seconds--
    }
  }, 1000);
};

module.exports = {
  timer
};
