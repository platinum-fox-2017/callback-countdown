const {
    displayCountdown
} = require("./views");

const timer = seconds => {
    // Your code here...
    var countdown = setInterval(function() {
        displayCountdown(second_to_string(seconds));
        seconds--;
        if (seconds < 0){
            clearInterval(countdown);
        }
    }, 1000);
};



function second_to_string(seconds) {
    let minuteStr = Math.floor(seconds / 60);
    let secondStr = seconds % 60;
    return ((minuteStr < 10) ? ((minuteStr = 0)?'00':'0'+minuteStr) : minuteStr) + " : " + ((secondStr<10)?'0'+secondStr:secondStr) ;
}

// timer(5);
module.exports = {
    timer
};
