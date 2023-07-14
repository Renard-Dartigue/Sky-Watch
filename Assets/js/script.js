var apiKey = "dd83042ea75a21d5ccc79e4363a69ff7";
var searchBtn = document.getElementById("search-btn")
var searchCity = document.getElementById("search-city")

searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    var content = (document.getElementById("current-weather").value.trim())
    search(content)
})
    //function to fetch data and send to boxes
function search(content) {
    fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q="
    + content
    + "&units=imperial"
    + "&appid="
    + apiKey
    )
    
    .then((response) => {
        return response.json();
    })
    .then((data) => displayCurrent(data))
        console.log(data);
    

}
