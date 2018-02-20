const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  let input = seconds;
  timer(input);

  var interval = setInterval(function(){ 
    if(input>0){
      input--;
      timer(input);
    }else{
      clearInterval(interval);
    } 
  }, 1000);
};

main();
