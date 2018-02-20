const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let minute = Math.floor(seconds / 60)
  let sec = seconds % 60
  // console.log(`${minute}:${sec}`)
  const countDown = setInterval(function(){
    // console.log(seconds)
    displayCountdown(`${minute} : ${sec}`)
    if(sec === 0){
      clearTimeout(countDown)
    }
    else if(sec > 0){
      sec--
    }
    
  },1000)
};


// timer(10)

module.exports = {
  timer
};
