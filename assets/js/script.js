
function mainDataGet(){
var dataToUse = JSON.parse(localStorage.getItem("finalData"))
console.log(dataToUse)

for(let i=0;i<dataToUse.length;i++){
    console.log(dataToUse[i])

    // parent element, where everything will live
    var dataContainer = document.createElement("div");

    // set ID for parent element. see style css for styling
    dataContainer.setAttribute("id", "finalDataContainer");

    //creating empty child elements and setting unique variable names for each element
    var parkTitle = document.createElement("h4");
    var cityli = document.createElement("li");
    var stateli = document.createElement("li");
    var temperatureLi = document.createElement("li");
    var humidityLi = document.createElement("li");
    var windSpeedLi = document.createElement("li");
    var parkAlertsTitle = document.createElement("li");
   
   
    var parkImage = document.createElement('img')
    var parkAlertsCat = document.createElement("li");

    // set class to child elements for CSS styling
    cityli.setAttribute("class", "cityLiBox"); //makes city a flex box
    stateli.setAttribute("class", "stateLiBox");
    temperatureLi.setAttribute("class", "tempBox");
    humidityLi.setAttribute("class", "humLi");
    windSpeedLi.setAttribute("class", "windSpeed");

    // adding src to image & adjusting width
    parkImage.setAttribute("src",dataToUse[i].image);
    parkImage.setAttribute("width", "100%");


    // creating element and adding the text for that variable
    var displayParktitle = document.createTextNode(dataToUse[i].name);
    var displayParkCity = document.createTextNode(dataToUse[i].city+",");
    var displayTemperature = document.createTextNode("Temperature: " +dataToUse[i].weather.main.temp + " °F");
    var displayHumidity = document.createTextNode("Humidity: " +dataToUse[i].weather.main.humidity + " %");
    var displayWindSpeed = document.createTextNode("Wind speed: " +dataToUse[i].weather.wind.speed + " MPH");
    var displayParkState = document.createTextNode(dataToUse[i].state);
    var displayImage = document.createTextNode(dataToUse[i].image);

    //****ALERTS DOEST WORK???? */
    var displayParksAlertsCat = document.createTextNode("Current Alerts: "+ dataToUse[i].Parkalerts.title.category);

    //appending the data info to the new child elements
    parkTitle.appendChild(displayParktitle);
    cityli.appendChild(displayParkCity);
    stateli.appendChild(displayParkState);

    temperatureLi.appendChild(displayTemperature);
    humidityLi.appendChild(displayHumidity);
    windSpeedLi.appendChild(displayWindSpeed);
    parkAlertsTitle.appendChild(displayParksAlertsTitle);
    parkAlertsCat.appendChild(displayParksAlertsCat);

    parkImage.appendChild(displayImage);

    // appending the child element to the parent element
    dataContainer.appendChild(parkTitle);
    dataContainer.appendChild(cityli);
    cityli.appendChild(stateli);
    dataContainer.appendChild(temperatureLi);
    dataContainer.appendChild(humidityLi);
    dataContainer.appendChild(windSpeedLi);
    dataContainer.appendChild(parkAlertsTitle);

    dataContainer.appendChild(parkAlertsCat);
    dataContainer.appendChild(parkImage);
    
    // appending the parent element to the API container in the HTML section
    document.getElementById("sPark").appendChild(dataContainer);


  };

}

// END OF ELEMENTS CODE 

