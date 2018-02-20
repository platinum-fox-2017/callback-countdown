const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  // let current = seconds
  let current = setInterval(function(){
    if(seconds < 0) {
      clearInterval(current)
    } else {

      var mind = seconds % (60 * 60);
      var min = Math.floor(mind / 60);
      if(min<10) min = '0'+min

      var secd = mind % 60;
      var sec = Math.ceil(secd);
      if(sec<10) sec = '0'+sec

      displayCountdown(`${min} : ${sec}`);
      seconds--
    }
  }, 1000);
};



module.exports = {
  timer
};
