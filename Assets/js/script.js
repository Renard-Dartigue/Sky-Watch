var APIkay = "dd83042ea75a21d5ccc79e4363a69ff7";
var searchBtn = document.getElementById("search-btn")
var searchCity = document.getElementById("search-city")

function search() {
    var content = searchCity.value 
    console.log(content)

    var url = "https://api.openweathermap.org/data/2.5/forcast?q="+ content + "$appid=" + APIKey + "&units=imperial"

    console.log(url)

    fetch(url)
    .then(function(response)) {
        return response.json()
    }
}