var apiKey = "dd83042ea75a21d5ccc79e4363a69ff7";
var searchBtn = document.getElementById("search-btn")
var searchCity = document.getElementById("search-city")
var weather = document.getElementById("current-weather")

$(searchBtn).on("click", function(event){
    event.preventDefault();
    var content = searchCity.value
    search(content)
})
    //function to fetch data and send to boxes
    let blarg = JSON.parse(localStorage.getItem(cities)) || [];
function search(content) {
    fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="
    + content
    + "&units=imperial"
    + "&appid="
    + apiKey
    )
    .then((response) => {
        console.log(response);
        return response.json();
        
    })
    .then((data) => displayCurrent(data))

}

function displayCurrent(data) {
    console.log(data);
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    let date = dayjs().format("MM,DD,YYYY")
    weather.innerText = name;
    var dayOf = document.createElement("h2")
    dayOf.innerText = description
    weather.append(dayOf)
}