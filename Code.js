

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

     //This creates the parameters of the loop
     for(var counter=0; counter < 11; counter++){

    //This is the beginning of our loop
    setTimeout(function(){

        //This means if the counter reaches 0 then it displays an alert
        if(currTime == 0){
            alert("Blastoff!")
            countdownElem.innerHTML = "We have liftoff";
        }

        //This tracks how much time is left on the counter and displays a message when it passes 25 seconds left
        else if(currTime < 25){
            countdownElem.innerHTML =  "Warning!! Less than ½ way to launch! Time left = " + currTime;
        }

        //If the counter has 25 seconds or more then the message does not change
        else{
            countdownElem.innerHTML = currTime;
        }

        //This code is what decreases our counter by 5 at the speed dictated by the timeoutIncrement variable
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;
     }
}