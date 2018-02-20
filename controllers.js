const { displayCountdown } = require("./views");

const timer = seconds => {
  var jalan = setInterval(function(){
    if(seconds>=0){
      var menit = Math.floor(seconds/60)
      var detik = seconds % 60
      if (menit<10) {
        menit = '0'+menit
      }
      if(detik<10){
        detik = '0'+detik
      }
      var tampil = menit+':'+detik
      displayCountdown(tampil)
      seconds--
    }else{
      clearInterval(jalan);
    }
  }, 1000);
};

module.exports = {
  timer
};
