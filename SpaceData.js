//These are the variables that needed to be used by both buttons
var timer = 0;
var theTime = "";
var time_interval = 1000;

//This is the function we use when coding a start button
function start(){
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

//This is the function we use when coding a stop button
function stop(){
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

//We use this to track the current time and how it is displayed
function updateDisplay(){
    theTime = new Date();
    var theMinutes = theTime.getMinutes();
    //This is one method of coding a tracker
    if (theMinutes < 10){
        theMinutes = "0" + String(theMinutes);
    }

    var theSeconds = (theTime.getSeconds() < 10 ? + "0" + String(theTime.getSeconds()) : theTime.getSeconds());

    var timeFormat = theTime.getHours() + ":" + theMinutes + ":" + theSeconds;
    document.getElementById("timeStamp").innerHTML = timeFormat;
}