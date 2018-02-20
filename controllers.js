const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var myVar = setInterval(function(){ myTimer() }, 1000);
  
  function myTimer() {
     
    displayCountdown(seconds);
    seconds--;   
      
  }
    
  clearInterval(myTimer);

  
};




module.exports = {
  timer
};
