
function getWeather() {
    clear();
    var city = document.getElementById("city").value;
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=2e657480e352fac936024fab6507c968";
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            var cityName = data.name;
            var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            // var d = new Date().toDateString(); ;
            var temprature = "Temperature: " + data.main.temp + " &#8457;" ;
            var weather = data.weather[0].main;
            var humidity = "Humidity: " + data.main.humidity + " %";
            var wind = "Wind Speed: " + data.wind.speed + " MPH";

            $(".cityName").append(cityName);
            // $(".currentDay").append(d);
            $(".weatherIcon").attr("src", icon);
            $(".weatherCondition").append(weather);
            $(".temp").append(temprature);
            $(".humidity").append(humidity);
            $(".windSpeed").append(wind);
        });

}

function clear() {
    $(".cityName").empty();
    $(".weatherIcon").empty();
    $(".weatherCondition").empty();
    $(".temp").empty();
    $(".humidity").empty();
    $(".windSpeed").empty();
}

function Defult() {
    clear();
    var city = "Silver Spring";
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=2e657480e352fac936024fab6507c968";
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            var cityName = data.name;
            var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var temprature = "Temperature: " + data.main.temp + " &#8457;" ;
            var weather = data.weather[0].main;
            var humidity = "Humidity: " + data.main.humidity + " %";
            var wind = "Wind Speed: " + data.wind.speed + " MPH";

            $(".cityName").append(cityName);
            $(".weatherIcon").attr("src", icon);
            $(".weatherCondition").append(weather);
            $(".temp").append(temprature);
            $(".humidity").append(humidity);
            $(".windSpeed").append(wind);
        });

}

Defult();