// Dark and Light mode function
function darkLightMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 $("#dark-mode").click(darkLightMode);

//  Weather

var apiKey = "1ca11eb2eb0a3f14218b80de67213ac5";
var state = ("enter state")
var today = moment().format("L")

function currentWeather(state) {
   var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=texas&units=imperial&appid=${apiKey}`;
   fetch(requestUrl)
    .then(function (response) {
       return response.json();
    })
    .then(function (weatherResponse) {
      console.log(weatherResponse);

      var currentState = $(`
            <h2 id="currentState">
                ${weatherResponse.name} ${today} 
            </h2>
            <p>Temperature: ${weatherResponse.main.temp} °F</p>
            <p>Humidity: ${weatherResponse.main.humidity}\%</p>
            <p>Wind Speed: ${weatherResponse.wind.speed} MPH</p>
        `);

        $("#apiWeatherBox1").append(currentState);
    });
    ;

    
}
currentWeather()
console.log(today)








