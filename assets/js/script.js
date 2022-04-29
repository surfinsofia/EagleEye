
function mainDataGet(event){
  event.preventDefault()
var dataToUse = JSON.parse(localStorage.getItem("finalData"))
console.log(dataToUse)

for(let i=0;i<dataToUse.length;i++){
    
  
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
    var weatherDescription = document.createElement('li')
    var weatherInfo = document.createElement('li')
    var parkImage = document.createElement('img')
    var parkAlertsCat = document.createElement("li");
    var weatherIcon = document.createElement('img')
    var siteInfo = document.createElement('li')
    var sitesUrls=document.createElement('a')
    // set class to child elements for CSS styling
    cityli.setAttribute("class", "cityLiBox"); //makes city a flex box
    stateli.setAttribute("class", "stateLiBox");
    temperatureLi.setAttribute("class", "tempBox");
    humidityLi.setAttribute("class", "humLi");
    windSpeedLi.setAttribute("class", "windSpeed");

    // adding src to image & adjusting width
    parkImage.setAttribute("src",dataToUse[i].image);
    parkImage.setAttribute("width", "100%");
    weatherIcon.setAttribute('src',"http://openweathermap.org/img/w/" + dataToUse[i].weather.weather[0].icon + ".png")
    
    
    
   

    // creating element and adding the text for that variable
    var displayParktitle = document.createTextNode(dataToUse[i].name);
    var displayParkCity = document.createTextNode(dataToUse[i].city+",");
    var displayTemperature = document.createTextNode("Temperature: " +dataToUse[i].weather.main.temp + " °F");
    var displayHumidity = document.createTextNode("Humidity: " +dataToUse[i].weather.main.humidity + " %");
    var displayWindSpeed = document.createTextNode("Wind speed: " +dataToUse[i].weather.wind.speed + " MPH");
    var displayParkState = document.createTextNode(dataToUse[i].state);
    var displayImage = document.createTextNode(dataToUse[i].image);
    var displayWeatherDescription=document.createTextNode(dataToUse[i].weather.weather[0].description.toUpperCase())
    var weatherInformation = document.createTextNode(dataToUse[i].weatherInfo)
    var siteinformation = document.createTextNode(dataToUse[i].siteDescription)
    //****ALERTS DOEST WORK???? */
    var displayParksAlertsCat = document.createTextNode("Current Alerts: "+ dataToUse[i].Parkalerts.title.title);
    var parkLink = document.createTextNode('   Click for more information...')

    //appending the data info to the new child elements
    parkTitle.appendChild(displayParktitle);
    cityli.appendChild(displayParkCity);
    stateli.appendChild(displayParkState);

    temperatureLi.appendChild(displayTemperature);
    humidityLi.appendChild(displayHumidity);
    windSpeedLi.appendChild(displayWindSpeed);
    parkAlertsTitle.appendChild(displayParksAlertsCat);
    parkAlertsCat.appendChild(displayParksAlertsCat);
    weatherDescription.appendChild(displayWeatherDescription)
    parkImage.appendChild(displayImage);
    weatherInfo.appendChild(weatherInformation)
    siteInfo.appendChild(siteinformation)
    sitesUrls.appendChild(parkLink)

    sitesUrls.href=dataToUse[i].siteUrl

    // appending the child element to the parent element
    dataContainer.appendChild(parkTitle);
    dataContainer.appendChild(cityli);
    cityli.appendChild(stateli);
    dataContainer.appendChild(weatherIcon);
    dataContainer.appendChild(displayWeatherDescription)
    
    dataContainer.appendChild(temperatureLi);
    dataContainer.appendChild(humidityLi);
    dataContainer.appendChild(windSpeedLi);
    dataContainer.appendChild(parkAlertsTitle);
    dataContainer.appendChild(weatherDescription)
    dataContainer.appendChild(parkAlertsCat);
    dataContainer.appendChild(parkImage);
    dataContainer.appendChild(siteinformation)
    dataContainer.appendChild(weatherInformation)
    dataContainer.appendChild(sitesUrls)
    
    // appending the parent element to the API container in the HTML section
    document.getElementById("sPark").appendChild(dataContainer);


  };

}

// END OF ELEMENTS CODE 

