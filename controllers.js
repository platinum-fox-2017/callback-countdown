const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...

let countdown = setInterval(function(){
  let minutes = Math.floor(seconds / 60);
  detik = seconds - minutes * 60;
  if(Array.from(String(minutes)).length === 1)minutes =`0${minutes}`;
  if(Array.from(String(detik)).length === 1) detik = `0${detik}`;
  displayCountdown(`${minutes} : ${detik}`);
  seconds--
  if (seconds === 0) {
    displayCountdown("B O O M");
    clearInterval(countdown);
  }
}, 1000);

};

module.exports = {
  timer
};


// function startTimer(duration, display) {
//   var timer = duration, minutes, seconds;
//   setInterval(function () {
//       minutes = parseInt(timer / 60, 10)
//       seconds = parseInt(timer % 60, 10);

//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;

//       display.textContent = minutes + ":" + seconds;

//       if (--timer < 0) {
//           timer = duration;
//       }
//   }, 1000);