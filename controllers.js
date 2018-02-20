const { displayCountdown } = require("./views");

const timer = seconds => {
  let beginSeconds = seconds
  let handle = setInterval(function(){
                if (seconds == beginSeconds) {
                  displayCountdown(convertTime(seconds));
                  seconds = seconds - 1;
                } else {
                  if(seconds < 0) {
                    clearInterval(handle);
                  } else {
                    displayCountdown(convertTime(seconds));
                    seconds = seconds - 1;
                  }
                }
              },1000)
};

let convertTime = seconds => {
  let convertResult = '';
  let bagi = Math.floor(seconds / 60);
  if(bagi >= 10) {
    convertResult = convertResult + bagi + ":"; 
    let sisa = seconds - (60 * bagi);
    if(sisa >= 10) {
      convertResult = convertResult + sisa;
    } else if (sisa >= 1) {
      convertResult = convertResult + "0" + sisa;
    } else {  
      convertResult = convertResult + "00";
    }
  } else if(bagi >= 1) {
    convertResult = convertResult + "0" + bagi + ":"; 
    let sisa = seconds - (60 * bagi);
    if(sisa >= 10) {
      convertResult = convertResult + sisa;
    } else if (sisa >= 1) {
      convertResult = convertResult + "0" + sisa;
    } else {  
      convertResult = convertResult + "00";
    }
  } else {
    convertResult = convertResult + "00:";
    if(seconds >= 10) {
      convertResult = convertResult + seconds;
    } else {
      convertResult = convertResult + "0" + seconds;
    }
  }
  return convertResult;
}

module.exports = {
  timer
};
