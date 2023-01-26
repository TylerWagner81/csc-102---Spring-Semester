

//Empty function; Code will be added later
function startButtonClick(){}

//Empty function; Code will be added later
function stopButtonClick(){}


//This is our newest countdown function
function runTimer(){
     //This will track the value of the countdown
     var currTime = 50;

     //This tracks the current timeout
     var timeout = 0;

     //This creates the 5 second delay using miliseconds
     var timeoutIncrement = 5000;

      //This will decrease the displayed coundown by 5 
      setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;

    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;

    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;

    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;

    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;

    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;

    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;

    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;

    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;

    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;

    }, timeout);
    timeout = timeout + timeoutIncrement;

    //This is the last setTimeout; coundown is now 0
    setTimeout(function(){
       alert("Blastoff!")
        countdownElem.innerHTML = "We have liftoff";
    }, timeout);
    timeout = timeout + timeoutIncrement;

}