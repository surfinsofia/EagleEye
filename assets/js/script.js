
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
    var parkAlertsTitle = document.createElement("li");
    var parkImage = document.createElement('img')

    // set class to child elements for CSS styling
    cityli.setAttribute("class", "cityLiBox"); //makes city a flex box
    stateli.setAttribute("class", "stateLiBox");

    // adding src to image & adjusting width
    parkImage.setAttribute("src",dataToUse[i].image);
    parkImage.setAttribute("width", "100%");


    // creating element and adding the text for that variable
    var displayParktitle = document.createTextNode(dataToUse[i].name);
    var displayParkCity = document.createTextNode(dataToUse[i].city+",");
    var displayParkState = document.createTextNode(dataToUse[i].state);
    var displayImage = document.createTextNode(dataToUse[i].image);

    //****ALERTS DOEST WORK???? */
    var displayParksAlertsTitle = document.createTextNode("Current Alerts: "+ dataToUse[i].Parkalerts.title.description);

    //appending the data info to the new child elements
    parkTitle.appendChild(displayParktitle);
    cityli.appendChild(displayParkCity);
    stateli.appendChild(displayParkState);
    parkAlertsTitle.appendChild(displayParksAlertsTitle);
    parkImage.appendChild(displayImage);

    // appending the child element to the parent element
    dataContainer.appendChild(parkTitle);
    dataContainer.appendChild(cityli);
    cityli.appendChild(stateli);
    dataContainer.appendChild(parkAlertsTitle);
    dataContainer.appendChild(parkImage);
    
    // appending the parent element to the API container in the HTML section
    document.getElementById("sPark").appendChild(dataContainer);


  };

}

// END OF ELEMENTS CODE 

