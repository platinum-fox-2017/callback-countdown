const { displayCountdown } = require("./views");

const timer = seconds => {
  let countdown = setInterval(function(){
    displayCountdown(secondToMinute(seconds))
    seconds -= 1
    if(seconds < 0){
      clearInterval(countdown)
    }
  },1000) 
};

function secondToMinute(seconds){
  let second = seconds%60
  let minute = Math.floor(seconds/60)
  if(second < 10 && minute === 0){
    return ` 00 : 0${second} `
  } else if (second >= 10 && minute == 0){
    return `00 : ${second}`
  }else if (second < 10  && minute < 10){
    return `0${minute}: 0${second}`
  }else if(second > 10  && minute < 10){
    return `0${minute}: ${second}`
  }else{
    return `${minute}:${second}`
  }
}

module.exports = {
  timer
};
