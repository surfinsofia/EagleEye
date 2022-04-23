var parkName = document.querySelector("#sPark")
var cityName = document.querySelector("#apiCityBox")
var stateName = document.querySelector("#apiStateBox")
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
      
      
      parkName.textContent=data.data[0].fullName 
    
      cityName.textContent=data.data[0].addresses[1].city
      console.log(data.data[0].addresses[1].stateCode)
      
      stateName.textContent=data.data[0].addresses[1].stateCode
      window.localStorage.setItem("cityFetch",data.data[0].addresses[1].city)

      console.log(cityName.value)

      

console.log(data.data[0].fullName)
console.log(data.data[0].addresses[0].postalCode)

    });
}
