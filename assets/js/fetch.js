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
      
     console.log(newArray)
      for(let i=0; i<=10; i++){       
        var parkInfo = {
          name:  data.data.fullName,
          
          city: data.data[i].addresses[1].city,
          address: data.data[i].addresses[0].line1,
          zipcode: data.data[i].addresses[1].postalCode,
          image:data.data[i].images[0].url
          
      };
      console.log(data.data[i].addresses[1].city)
         newArray.push(parkInfo)
        
        window.localStorage.setItem("parkInfo",JSON.stringify(newArray))
          
        
      }
     
      //  console.log(localStorage.parkInfo)
    
        currentCityWeather();
    });
}
// var test = {conditions:["hot",'cold','misty','windy','gusty']}
  


// var storedNames = JSON.parse(localStorage.getItem("parkInfo"));
// console.log(storedNames[0].weather)
// console.log(storedNames)



// for(let i=0;i<storedNames.length;i++){
//   console.log(storedNames[i].city)
//   storedNames[i].weather= test.conditions[i]
  

var storedNames = JSON.parse(localStorage.getItem("parkInfo"));
console.log(storedNames)

for(let i=0;i<storedNames.length;i++){
  console.log(storedNames[i])

// //loop to append elements to page
// for(let i=0;i<storedNames.length;i++){
//   console.log(storedNames[i].weather)
  
  
  
//   const para = document.createElement("p");
//   para.innerHTML =storedNames[i].weather ;
//   document.getElementById("sPark").appendChild(para);
// }



// var newKey=storedNames[0].weather="hot"










// Dark and Light mode function
function darkLightMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 $("#dark-mode").click(darkLightMode);

// weather for each City


// cities array 
//  var city =["Austin","Dallas", "Houston", "San Antonio", "amarillo"];
 var today = moment().format("L");
 

 

 function currentCityWeather (){

  var cityFromLocalStorage = JSON.parse(localStorage.getItem("cityFetch"))
console.log(cityFromLocalStorage)
   for (var i = 0 ; i < cityFromLocalStorage.length; i++){
       // weather api
       var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityFromLocalStorage[i] + "&units=imperial&appid=1ca11eb2eb0a3f14218b80de67213ac5"
         fetch(requestUrl)
        .then(function (response) {
            return response.json();
         })
      .then(function (weatherResponse) {
         console.log(weatherResponse);
         console.log(weatherResponse.main.temp);
      // append the weather result on the browser
           var currentcity = $(`
              <h4 id="currentState">
                  ${weatherResponse.name} ${today}
              </h4>
              <p>Temperature: ${weatherResponse.main.temp} °F</p>
              <p>Humidity: ${weatherResponse.main.humidity}\%</p>
         `   );
          $("#apiWeatherBox1").append(currentcity);
       });
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
    .then(function (data) {
      console.log(data);

      newAlertsArray=[]

      console.log(newAlertsArray);

      for(let i=0; i<=10; i++){       
        var parkAlertsInfo = {
          title: data.data[i].title,
          description: data.data[i].description,
          date: data.data[i].lastIndexedDate
      };

      newAlertsArray.push(parkAlertsInfo);

      window.localStorage.setItem("parkAlertsInfo",JSON.stringify(newAlertsArray))
      
      // console.log(data.data[0].title);
      // console.log(data.data[0].description);
      // console.log(data.data[0].lastIndexedDate);
      // webTest.textContent="";
      // console.log(webTest);   
    }
    });
  
}
//test to see if it works
getAlertsApi()





    //     $("#apiWeatherBox3").append(currentState);
    // });
    // ;
   


         
          //  console.log(localStorage.parkInfo)
        
    
     


    
  





    
 










