const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let timer = setInterval(() => { 
    if (seconds < 0){
      clearInterval(timer)
    } else {
      displayCountdown(display(seconds))
      seconds -= 1000
    }
  }, 1000)
};


let display = seconds => {
  let time = seconds/1000
  let min = Math.floor(time/60)
  let sec = Math.floor(time % 60)
  
  let printMin = (min < 10) ? `0`+ min: min
  let printSec = (sec < 10) ? `0`+ sec: sec
  
  return `${printMin}:${printSec}`
}

module.exports = {
  timer
};
