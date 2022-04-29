var today = moment().format("L");
// Dark and Light mode function
function darkLightMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

$("#dark-mode").click(darkLightMode);


var parkName = document.querySelector("#sPark")
var cityName = document.querySelector("#apiCityBox")
var stateName = document.querySelector("#apiStateBox")
var cityAddress = document.querySelector("#apiAddress")
var searchBtn = document.querySelector("#searchBtn")

searchBtn.addEventListener("click", saveInput)






function saveInput(event){
  event.preventDefault();


  var stateCode = document.querySelector("#stateInputText").value
      window.localStorage.setItem("state", stateCode);
      
  getApi()
  
}




function getApi() {
  var stateStorage = window.localStorage.getItem("state")


  var requestUrl = 'https://developer.nps.gov/api/v1/parks?parkCode=&stateCode='+stateStorage+'&api_key=RoK1dEqNYGy3sRg4nQLmqFuSBnd6vuo9p4WA8l9Q';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      
      newArray=[]
      
     console.log(newArray)
      for(let i=0; i<=data.data.length; i++){       
        

        if(stateStorage===data.data[i].addresses[1].stateCode){
          console.log('it worked')
          var parkInfo = {
            name:  data.data[i].name,
            
            city: data.data[i].addresses[1].city,
            address: data.data[i].addresses[0].line1,
            zipcode: data.data[i].addresses[1].postalCode,
            image:data.data[i].images[0].url,
            state:data.data[i].addresses[1].stateCode,
            feesDescription:data.data[i].entranceFees[0].title,
            directionsInformation: data.data[i].directionsInfo,
            phoneNumber: data.data[i].contacts.phoneNumbers[0],
            weatherInfo: data.data[i].weatherInfo,
            fees:'$'+data.data[i].entranceFees[0].cost,
            mondayHours: "Monday Hours: "+data.data[i].operatingHours[0].standardHours.monday,
            tuesdayHours:"Tuesday Hours: " +data.data[i].operatingHours[0].standardHours.tuesday,
            wednesdayHours:'Wednesday Hours: '+data.data[i].operatingHours[0].standardHours.wednesday,
            thursdayHours:"Thursday Hours: "+ data.data[i].operatingHours[0].standardHours.thursday,
            fridayHours:'Friday Hours: ' +data.data[i].operatingHours[0].standardHours.friday, 
            saturdayHours:'Saturday Hours: ' +data.data[i].operatingHours[0].standardHours.saturday,
            sundayHours:'Sunday Hours: ' +data.data[i].operatingHours[0].standardHours.sunday,


            
        };
              newArray.push(parkInfo) 
              window.localStorage.setItem("parkInfo",JSON.stringify(newArray))  
            console.log(newArray)
        } 
          
        
        // console.log(data.data[i].addresses[1].stateCode)
          
       
      
      
      // pushing the parkinfo object into an array named newArray  
      
      // console.log(newArray)
        //storing newArray into local storage
                 
    }
        
    });
    storeCitiesInLocalStorage();
}


function storeCitiesInLocalStorage(){
  // getting parkInfo from local storage and storing it in a variable named storedNames
var storedNames = JSON.parse(localStorage.getItem("parkInfo"));
// console.log(storedNames)
var citiesArray =[]


for(let i=0;i<storedNames.length;i++){
  //looping through storedNames position and pushing the cities into a new citiesArray
  citiesArray.push(storedNames[i].city)
  //storing cities array into local storage 
  window.localStorage.setItem("citiesFromData",JSON.stringify(citiesArray))
 
} currentCityWeather();
}
 

 function currentCityWeather (){

  var cityFromLocalStorage = JSON.parse(localStorage.getItem("citiesFromData"))
  var weatherArray =[]
  
  
for (var i = 0 ; i < cityFromLocalStorage.length; i++){
       // weather api
       
       var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityFromLocalStorage[i] + "&units=imperial&appid=e724ba8d68a039f0c9e73328553900ef"
         fetch(requestUrl)
        .then(function (response) {
            return response.json();
         })
      .then(function (weatherResponse) {
        //  console.log(weatherResponse); 
        // pushing weather response data into an array named weatherArray
        

         weatherArray.push(weatherResponse)
        
        
        
        
         //  var weatherToparkInfo = JSON.parse(localStorage.getItem("parkInfo"));
        //  console.log(weatherToparkInfo)

       


      // append the weather result on the browser
      //      var currentcity = $(`
      //         <h4 id="currentState">
      //             ${weatherResponse.name} ${today}
      //         </h4>
      //         <p>Temperature: ${weatherResponse.main.temp} °F</p>
      //         <p>Humidity: ${weatherResponse.main.humidity}\%</p>
      //    `   );
      //     $("#apiWeatherBox1").append(currentcity);

      //storing weatherArray into local storage
      window.localStorage.setItem("weatherForCites",JSON.stringify(weatherArray))

       });
       getAlertsApi();
     }
    
 }
 
 
 
// Alerts API Function

function getAlertsApi() {
  var stateStorage = window.localStorage.getItem("state")

  var requestAlertsUrl = 'https://developer.nps.gov/api/v1/alerts?parkCode=&stateCode='+stateStorage+'&api_key=RoK1dEqNYGy3sRg4nQLmqFuSBnd6vuo9p4WA8l9Q';

  fetch(requestAlertsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (alertsFetch) {
      

      newAlertsArray=[]
      
      

      for(let i=0; i<=alertsFetch.data.length; i++){       
        
        
        
        var parkAlertsInfo = {
          title: alertsFetch.data[i],
          
          
        }
      ;

      newAlertsArray.push(parkAlertsInfo);

      window.localStorage.setItem("parkAlertsInfo",JSON.stringify(newAlertsArray))
      
      // console.log(data.data[0].title);
      // console.log(data.data[0].description);
      // console.log(data.data[0].lastIndexedDate);
      // webTest.textContent="";
      // console.log(webTest);  
      dataStructureCreated(); 
    }
   
    });
   
}
//test to see if it works
function dataStructureCreated(){
  //accessing parkInfo in local storage
var newData = JSON.parse(localStorage.getItem("parkInfo"))

//accessing weatherForCities in local storage
var newWeatherData = JSON.parse(localStorage.getItem("weatherForCites"))

// accessing parkAlertsInfo in local storage
var parkAlerts = JSON.parse(localStorage.getItem("parkAlertsInfo"))



for(let i=0; i<newData.length; i++){
// storing adding weather and alert data to newData object
newData[i].weather = newWeatherData[i]
newData[i].Parkalerts = parkAlerts[i]



//saving final data in local storage
window.localStorage.setItem("finalData",JSON.stringify(newData))

// console.log(newData)
// return;

}

}
//mainDataGet();



var fetchBtn = document.getElementById('fetch-btn');
fetchBtn.addEventListener("click",getCamApi )

function getCamApi() {
  var requestUrl = "https://developer.nps.gov/api/v1/webcams?api_key=RoK1dEqNYGy3sRg4nQLmqFuSBnd6vuo9p4WA8l9Q"    ;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
console.log(data)



  var camname=$(`
  <option>
   ${data.data[32].title}
- TX
  </option>
  <option>
   ${data.data[10].title}
- UT
  </option>
 <option>
  ${data.data[28].title}
- AZ
 </option>
 <option>
 ${data.data[27].title}
 - AZ
</option>
<option>
 ${data.data[26].title}
 - AZ
</option>
<option>
${data.data[9].title}
- CA
</option>
<option>
${data.data[22].title}
- CA
</option>
<option>
${data.data[18].title}
- WA
</option>
<option>
${data.data[17].title}
- CO
</option>
<option>
${data.data[16].title}
- CO
</option>
<option>
${data.data[7].title}
- TX
</option>
<option>
${data.data[30].title}
- AK
</option>
  `)
$("#parkname").append(camname)




var link=$(`
<option>
 ${data.data[10].url}
</option>
`)
$("#linko").append(link)



var coord=$(`
<option>
 ${data.data[10].latitude}
 ${data.data[10].longitude}
</option>
`)
$("#coordinates").append(coord)



var active=$(`
<option>
 ${data.data[10].status}
</option>
`)
$("#stat").append(active)});



}














