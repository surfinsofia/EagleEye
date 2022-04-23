// Dark and Light mode function
function darkLightMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 addEventListener("click", darkLightMode)

//  Weather

var apikey = "1ca11eb2eb0a3f14218b80de67213ac5";
var state = ("texas")
function currentWeather(state){
    requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${MediaStreamTrackEvent}&units=imperial&appid=${apikey}`
    fetch(requestUrl)
      .then(function (response) {
         return response.json();
       }).then(function (currentConditionState) {
          console.log(currentConditionState);
       });
}
currentWeather()







