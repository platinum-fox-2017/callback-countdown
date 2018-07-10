var myVar = setInterval(function(){ myTimer() }, 1000);

var num = 3;
var counterIncrement=-1;

function myTimer() {
    if (num > 0) {
        console.log(num);
        num = num + counterIncrement;
    } else {
        clearInterval(myVar);
    }

}

function myStopFunction() {
    
}