

//Empty function; Code will be added later
function startButtonClick(){}

//Empty function; Code will be added later
function stopButtonClick(){}

//This function asks for the users first and last names and then the badge number
//Names need to be less than 20 characters and the badge needs to be less than 4 characters
function getUserInput(){

    //This establishes fullName as a variable
    var fullName = "";

    //This sets the default badgeNumber to 0
    var badgeNumber = 0;

    //Our first loop checks the first and last names and makes sure they aren't too long
    do{
        //These two lines assign the variables for firstName and lastName the values entered by the user
        var firstName = prompt("What is your first name? ");
        var lastName = prompt("What is your last name? ");

        //This line combines the first and last name variables into a fullName variable 
        fullName = firstName + " " + lastName;

        //checks the length of the full name
        if (fullName.length > 20){
            alert("Please use a name shorter than 20 characters, the name you entered was: " + fullName.length);
        }
    }
    while(fullName.length > 20);

    //The second loop checks for a badge number and makes sure it isn't longer than 3 characters
    do{
        //here is where the user enters their badge number
        badgeNumber = prompt("Enter your badge number here. ");

        if (badgeNumber > 999){
            alert("Badge number invalid")
        }
    }
    while(badgeNumber > 999);

    return fullName + " " + badgeNumber;
}


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