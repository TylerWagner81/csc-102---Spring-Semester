//These are the variables that needed to be used by both buttons
var timer = 0;
var theTime = "";
var time_interval = 5000;

//This creates a class to hold the space data
class InputData{
    constructor(
        seconds_data,
        Latitude,
        Longitude,
        gpsSensor_alt,
        bmpSensor_alt,
        bmpSensor_pres,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eco2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.seconds_data = seconds_data;
        this.Latitude = Latitude;
        this.Longitude = Longitude;
        this.gpsSensor_alt = gpsSensor_alt;
        this.bmpSensor_alt = bmpSensor_alt;
        this.bmpSensor_pres = bmpSensor_pres;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eco2 = cssSensor_eco2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this. magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ; 
    }
}

//This function builds the row of information to display. Sample: <td>legend: </td><td>value units
function dataRow(legend, value, units){
    var txt = "<td>";
    txt += legend;
    txt += ": </td><td>";
    txt += value;
    txt += " " + units;
    txt += "</td>";
    return txt;
}



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

function getData(){
    var loadedData = loadData();
    return loadedData;
}

//We use this function to track the current time and how it is displayed
function updateDisplay(){
    theTime = new Date();
    var theMinutes = theTime.getMinutes();

    //This is one method of coding a tracker
    if (theMinutes < 10){
        theMinutes = "0" + String(theMinutes);
    }
    //This is a different method of coding a tracker
    var theSeconds = (theTime.getSeconds() < 10 ? + "0" + String(theTime.getSeconds()) : theTime.getSeconds());

    //this sets the format that the current time is displayed
    var timeFormat = theTime.getHours() + ":" + theMinutes + ":" + theSeconds;
    document.getElementById("timeStamp").innerHTML = timeFormat;

    var timeRead = data[index].seconds_data;
    var dataTable = document.getElementById("data");

    //This updates each value on the table using the data provided. 
    if(timeRead >=10){
        dataTable.rows["seconds_data"].innerHTML = dataRow("Time Elapsed", data[index].seconds_data, "seconds");
        dataTable.rows["Latitude"].innerHTML = dataRow("Latitude", data[index].Latitude, "");
        dataTable.rows["Longitude"].innerHTML = dataRow("Longitude", data[index].Longitude, "");
        dataTable.rows["gpsSensor_alt"].innerHTML = dataRow("GPS Altitiude", data[index].gpsSensor_alt, "");
        dataTable.rows["bmpSensor_alt"].innerHTML = dataRow("BMP Altitiude", data[index].bmpSensor_alt, "");
        dataTable.rows["bmpSensor_pres"].innerHTML = dataRow("BMP Pressure", data[index].bmpSensor_pres, "");
        dataTable.rows["bmpSensor_temp"].innerHTML = dataRow("BMP Temperature", data[index].bmpSensor_temp, "");
        dataTable.rows["digSensor_temp"].innerHTML = dataRow("Digital Temperature", data[index].digSensor_temp, "");
        dataTable.rows["cssSensor_temp"].innerHTML = dataRow("CSS Temperature", data[index].cssSensor_temp, "");
        dataTable.rows["cssSensor_eco2"].innerHTML = dataRow("CSS eCO2", data[index].cssSensor_eco2, "");
        dataTable.rows["cssSensor_TVOC"].innerHTML = dataRow("CSS TVOC", data[index].cssSensor_TVOC, "");
        dataTable.rows["UV"].innerHTML = dataRow("UV", data[index].UV, "");
        dataTable.rows["accelX"].innerHTML = dataRow("Acceleration X", data[index].accelX, "");
        dataTable.rows["accelY"].innerHTML = dataRow("Acceleration Y", data[index].accelY, "");
        dataTable.rows["accelZ"].innerHTML = dataRow("Acceleration Z", data[index].accelZ, "");
        dataTable.rows["magneticX"].innerHTML = dataRow("Magnetic X", data[index].magneticX, "");
        dataTable.rows["magneticY"].innerHTML = dataRow("Magnetic Y", data[index].magneticY, "");
        dataTable.rows["magneticZ"].innerHTML = dataRow("Magnetic Z", data[index].magneticZ, "");
        dataTable.rows["gyroX"].innerHTML = dataRow("Gryro X", data[index].gyroX, "");
        dataTable.rows["gyroY"].innerHTML = dataRow("Gryro Y", data[index].gyroY, "");
        dataTable.rows["gyroZ"].innerHTML = dataRow("Gryro Z", data[index].gyroZ, "");
    }
    //Resets the data when the end is reached
    if (index > 500){
        index = 0;
    }
    else{
        index++;
        //index = index + 1;
    }
}