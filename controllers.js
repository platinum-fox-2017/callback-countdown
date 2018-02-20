const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here..
  // console.log(`${minute}:${sec}`)
  const countDown = setInterval(function(){
    // console.log(seconds)
    let minute = Math.floor(seconds / 60)
    let sec = seconds % 60

    if(minute <10 ){
      minute = '0' + minute
    }
    if(sec < 10){
      sec = '0' + sec
    }
    let display = minute + ' : '+ sec
    displayCountdown(display)
    if(seconds === 0){
      clearTimeout(countDown)
    }
    else{
      seconds--
    }
    
  },1000)
};


// timer(10)

module.exports = {
  timer
};
