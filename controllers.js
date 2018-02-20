const { displayCountdown } = require("./views");

const timer = seconds => {
  
  var countDown = setInterval(function(){
    displayCountdown(seconds)
    if(seconds === 0){
      displayCountdown(false)
      clearInterval(countDown)
    } else {
      seconds--
    }
  },1000);

};

module.exports = {
  timer
};



