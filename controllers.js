const { displayCountdown } = require("./views");


const timer = seconds => {
  let minute = seconds % 60
  let hour = Math.floor(seconds/60)
  var counter = setInterval(
    function () {
      if (hour <= 9 && minute <= 9) {
        displayCountdown('0'+hour + ':' +'0'+ minute)
        minute -= 1
        if (minute < 0 && hour == 0) {
          clearInterval(counter)
          displayCountdown('boom')
        }
        else if (minute < 0) {
          hour -= 1
          minute = 59
        }
      }
      else if (minute > 9){
        displayCountdown('0' +hour + ':' + minute)
        minute -= 1
        if (minute < 0 && hour == 0) {
          clearInterval(counter)
          displayCountdown('boom')
        }
        else if (minute < 0) {
          hour -= 1
          minute = 59
        }
      }

    },1000)
}


module.exports = {
  timer
};
