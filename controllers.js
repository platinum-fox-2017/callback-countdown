const { displayCountdown } = require("./views");

const timer = seconds => {
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  if(minutes<10){
    minutes = '0'+minutes;
  }
  if(seconds<10){
    seconds = '0'+seconds;
  }
  displayCountdown(`${minutes} : ${seconds}`);   
};

module.exports = {
  timer
};
