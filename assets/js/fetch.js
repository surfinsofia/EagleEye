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



console.log(searchBtn)


function saveInput(event){
  event.preventDefault();


  var stateCode = document.querySelector("#stateInputText").value
      window.localStorage.setItem("state", stateCode);
      console.log(stateCode)
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
      
     
      for(let i=0; i<=data.data.length; i++){       
        
        
        var parkInfo = {
          name:  data.data[i].name,
          
          city: data.data[i].addresses[1].city,
          address: data.data[i].addresses[0].line1,
          zipcode: data.data[i].addresses[1].postalCode,
          image:data.data[i].images[0].url
          
      };
      
      
      // pushing the parkinfo object into an array named newArray  
      newArray.push(parkInfo)
      // console.log(newArray)
        //storing newArray into local storage
         window.localStorage.setItem("parkInfo",JSON.stringify(newArray))              
    }
         
    });
    storeCitiesInLocalStorage();
}


function storeCitiesInLocalStorage(){
  // getting parkInfo from local storage and storing it in a variable named storedNames
var storedNames = JSON.parse(localStorage.getItem("parkInfo"));
// console.log(storedNames)
var citiesArray =[]


console.log(citiesArray)
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
       var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityFromLocalStorage[i] + "&units=imperial&appid=ec09eb5352a3fea1cbdc287501e99a39"
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
     }
     getAlertsApi();
 }
 
 
 
// Alerts API Function

function getAlertsApi() {
  var stateStorage = window.localStorage.getItem("state")

  var requestAlertsUrl = 'https://developer.nps.gov/api/v1/alerts?parkCode=&stateCode='+stateStorage+'&api_key=RoK1dEqNYGy3sRg4nQLmqFuSBnd6vuo9p4WA8l9Q';

  fetch(requestAlertsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      newAlertsArray=[]

      console.log(newAlertsArray);

      for(let i=0; i<=data.data.length; i++){       
        
        
        
        var parkAlertsInfo = {
          title: data.data[i].title,
          description: data.data[i].description,
          date: data.data[i].lastIndexedDate
        }
      ;

      newAlertsArray.push(parkAlertsInfo);

      window.localStorage.setItem("parkAlertsInfo",JSON.stringify(newAlertsArray))
      
      // console.log(data.data[0].title);
      // console.log(data.data[0].description);
      // console.log(data.data[0].lastIndexedDate);
      // webTest.textContent="";
      // console.log(webTest);  
    
    }
    dataStructureCreated(); 
    });
   
}
//test to see if it works
function dataStructureCreated(){
  //accessing parkInfo in local storage
var newData = JSON.parse(localStorage.getItem("parkInfo"))
console.log(newData)
//accessing weatherForCities in local storage
var newWeatherData = JSON.parse(localStorage.getItem("weatherForCites"))
console.log(newWeatherData)
// accessing parkAlertsInfo in local storage
var parkAlerts = JSON.parse(localStorage.getItem("parkAlertsInfo"))
console.log(parkAlerts)


for(let i=0; i<newData.length; i++){
// storing adding weather and alert data to newData object
newData[i].temp = newWeatherData[i].main.temp
newData[i].windspeed= newWeatherData[i].wind.speed
newData[i].humidity= newWeatherData[i].main.humidity
newData[i].description = newWeatherData[i].weather[0].description
newData[i].icon = newWeatherData[i].weather[0].icon
newData[i].alert = parkAlerts[i].title
newData[i].alertType = parkAlerts[i].description
newData[i].alertDate = parkAlerts[i].date

console.log(newData)
//saving final data in local storage
window.localStorage.setItem("finalData",JSON.stringify(newData))
}

}

