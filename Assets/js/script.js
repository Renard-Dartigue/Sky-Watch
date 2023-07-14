var apiKey = "dd83042ea75a21d5ccc79e4363a69ff7";
var searchBtn = document.getElementById("search-btn")
var searchCity = document.getElementById("search-city")
var weather = document.getElementById("current-weather")
var weekday = document.getElementById("five-days")
var preVious = document.getElementById("previous")
let savedDay =  []

$(searchBtn).on("click", function(event){
    event.preventDefault();
    var content = searchCity.value
    search(content)
})
    //function to fetch data and send to boxes

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
    fiveDay(content)

}

function displayCurrent(data) {
    console.log(data);
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    let date = dayjs().format("MM,DD,YYYY")


    weather.innerText = name;
    var toDay = document.createElement("h2")
    var iMage = document.createElement("img")
    var temPer = document.createElement("h2")
    var huMid = document.createElement("h2")
    var dayOf = document.createElement("h2")

    toDay.innterText = date
    iMage.src = "https://openweathermap.org/img/wn/"+icon+".png"
    temPer.innerText = temp
    huMid.innerText = humidity
    dayOf.innerText = description

    weather.append(dayOf, toDay, iMage, temPer, huMid)
    savedCity(name)
}


/////////////////////////////////////////////////////////////////////////////
function fiveDay(content) {
fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q="
    + content
    + "&units=imperial"
    + "&appid="
    + apiKey
    )
    .then((response) => {
        console.log(response);
        return response.json();
        
    })
    .then((data) => forCast(data))
}


function forCast(data){
    weekday.innerHTML = ""
    for( var i = 7; i < data.list.lenght; i += 8){
        const {name} = data.content
        const {icon, description} = data.list[i].weather[0];
        const {temp, humidity} = data.list[i].main;
        let date = dayjs().format("MM,DD,YYYY")

        var Day1 = document.createElement("div")
        var Day2 = document.createElement("h2")
        var Day3 = document.createElement("h2")
        var Day4 = document.createElement("img")
        var Day5 = document.createElement("h2")
        var Day6 = document.createElement("h2")

        Day1.id = "five-days-" + i
        Day2.id = "date-" + i
        Day3.id = "temp-" + i
        Day4.id = "icon-" + i
        Day5.id = "description-" + i
        Day6.id = "humidity-" + i
        
        Day1.innerText = name
        Day2.innerText = date
        Day3.src = "https://openweathermap.org/img/wn/"+icon+".png"
        Day4.innerText = temp
        Day5.innerText = description
        Day6.innerText = humidity

        var dayContain = document.createElement("div")
 //       dayContain.classList.add()
        dayContain.append(Day1, Day2, Day3, Day4, Day5, Day6)
        weekday.append(dayContain)
    }
}

function savedCity(content) {
    savedDay = JSON.parse(localStorage.getItem(cities)) 
    if (savedDay === null) {
        savedDay = []
    }
    if(!savedDay.incudes(content)) {
        savedDay.push(content)
        localStorage.setItem("cities", JSON.stringify(savedDay))
        displayStorage()
    }
}

function displayStorage() {
    preVious.innerHTML = ""
    for (let index = 0; index < savedDay.length; index++) {
        var history = savedDay[i]
        historyList = document.createElement("div")
        historyList.innerText = history
        preVious.append(historyList)
        $(preVious).on("click",function(event){
            var historyCity = event.target.innerText
            search(historyCity)
        })
    }


}
