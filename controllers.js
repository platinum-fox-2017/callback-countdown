const { displayCountdown } = require("./views");

const timer = seconds => {
  let countdown = setInterval(function(){ 
  	if (seconds < 0) clearInterval(countdown);
  	else displayCountdown(format(seconds--));
  }, 1000);
};

const format = seconds => {
	let result = '';

	if (Math.floor(Number(seconds) / 60 < 10)) result += '0' + (Math.floor(Number(seconds)/60)).toString();
	else result += (Math.floor(Number(seconds)/60)).toString();

	result += ':';

	if (Number(seconds%60) < 10) result += '0' + (Number(seconds%60)).toString();
	else result += (Number(seconds%60)).toString().toString();

	return result;
}

module.exports = {
  timer
};
