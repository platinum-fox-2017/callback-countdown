const { displayCountdown } = require("./views");

const timer = seconds => {
  let start = seconds
  const countDown = setInterval(function(){ 
    let hour = Math.floor(start / 3600), minute = Math.floor((start - (hour*3600))/60)
    let detik = (start - (hour*3600)) - (minute*60)

    if(Array.from(String(hour)).length === 1) hour = `0${hour}`

    if(Array.from(String(minute)).length === 1) minute = `0${minute}`

    if(Array.from(String(detik)).length === 1) detik = `0${detik}`

    displayCountdown(`${hour} : ${minute} : ${detik}`)

    start--
    if(start === 0) clearInterval(countDown);

  }, 1000);
};

module.exports = {
  timer
}
