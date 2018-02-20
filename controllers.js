const { displayCountdown } = require("./views");

const timer = seconds => {
  var counter = setInterval(function(){
    let minutes = Math.floor(seconds/60)
    let detik = seconds%60
      if(seconds === 0){
        displayCountdown('00:00')
        clearInterval(counter)
      } else if(minutes < 10 && detik <10){
        displayCountdown('0'+minutes+':0'+detik)
        seconds -= 1
      } else if (minutes < 10){
        displayCountdown('0'+minutes+':'+detik)
        seconds -= 1
      } else if (detik <10){
        displayCountdown(minutes+':0'+detik)
        seconds -= 1
      } else {
        displayCountdown(minutes+':'+detik)
        seconds -= 1
      }
      // console.log(seconds,minutes,detik);
    },500)
};



module.exports = {
  timer
};
