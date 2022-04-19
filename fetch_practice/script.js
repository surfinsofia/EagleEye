var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener("click",getApi )
//getApi function is called when the fetchButton is clicked

function getApi() {
  
  // Insert the API url to get a list of your repos
  var requestUrl = 'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
console.log(data)
    //   console.log(data.weather[0].description)
      //looping over the fetch response and inserting the URL of your repos into a list
    //   for (var i = 0; i < data.length; i++) {
        //Create a list element
        // var listItem = document.createElement('li');
        
        // var h1tag = document.querySelector('#test')
        //Set the text of the list element to the JSON response's .html_url property
        
    //     listItem.textContent = "City Name: " + data.name +" "+ data.weather[0].description ;
    //    h1tag.textContent= data.visibility
     
        //Append the li element to the id associated with the ul element.
        repoList.appendChild(listItem);
       
    //   }
    });
}

fetchButton.addEventListener('click', getApi);
