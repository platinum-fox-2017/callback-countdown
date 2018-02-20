const { displayCountdown } = require("./views");

const timer = seconds => {
    let i =0;
    let timer = setInterval(function(){
      if(i>seconds) clearInterval(timer);
      else {
        displayCountdown(secondsToString(i));
        i++
      }
    }, 1000);
  };
  
const secondsToString = seconds => {
    let secondsSTR = '';
    let min = Math.floor(seconds/60);
    let sec = seconds%60;
    secondsSTR = (min<10 ? '0'+min : min) +":"+(sec<10 ? '0'+sec : sec);
    return secondsSTR
}

module.exports = {
  timer
};
