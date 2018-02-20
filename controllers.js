const { displayCountdown } = require("./views");

const timer = (seconds) => {
  // Your code here...
  let minutes = Math.floor(seconds / 60)
  let newSecond = seconds % 60
  let countdown = setInterval(
    function () {
    if(minutes < 10 && newSecond < 10) {
      displayCountdown('0'+ minutes + ':' + '0' + newSecond)
      newSecond--
      if(newSecond < 0) {
        minutes--
        newSecond = 59
      } else if(newSecond === 0 && minutes === 0) {
        clearInterval(countdown)
        displayCountdown('GONG XI FAT CHAI!!')
      }
    } else {
      displayCountdown(minutes + ':' + newSecond)
      newSecond--
      if(newSecond < 0) {
        minutes--
        newSecond = 59
      }
    }

  },1000
  )
};

module.exports = {
  timer
};
