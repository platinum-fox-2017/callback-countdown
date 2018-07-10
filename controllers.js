const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var myVar = setInterval(function(){ myTimer() }, 1000);
  
  function myTimer() {
    
    if (seconds >= 0) {
      displayCountdown(seconds);
      seconds--;   
    } else {
      clearInterval(myVar);
    }
    
      
  }
    

  
};




module.exports = {
  timer
};
