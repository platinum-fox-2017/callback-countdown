const { displayCountdown } = require("./views");

const timer = seconds => {

  let i = seconds;
  let menit = Math.floor(seconds / 60)
  let detik = Math.floor(seconds % 60)

  let countdown = setInterval(() => {
    if (menit < 10) {
      data = '0' + menit + ':' + detik
      if (detik < 10) {
        data = '0' + menit + ':0' + detik
      }
    } else {
        data = menit + ':' + detik
      
    }
    displayCountdown(data)
    if(detik === 0 && menit === 0) {
      clearInterval(countdown)
    } else if(detik === 0 && menit >= 0) {
      menit--;
      detik = 60;
    } else {
      detik--;
    }
  }, 1000);

};

module.exports = {
  timer
};
