
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=eb0aea8e8e9b0dd1862ca2f6bc22fcd2&units=metric")
    .then(response => response.json())
    .then((response) =>{
        pressure.innerHTML = response["main"]["pressure"]
        temp.innerHTML = response["main"]["temp"]
        temp2.innerHTML = response["main"]["temp"]
        feels_like.innerHTML = response["main"]["feels_like"]
        min_temp.innerHTML =response["main"]["temp_min"]
        max_temp.innerHTML = response["main"]["temp_max"]
        wind_speed.innerHTML = response["wind"]["speed"]
        wind_speed2.innerHTML = response["wind"]["speed"]
        wind_degrees.innerHTML = response["wind"]["deg"]
        humidity.innerHTML = response["main"]["humidity"]
        humidity2.innerHTML = response["main"]["humidity"]
        sunrise.innerHTML = response["sys"]["sunrise"]
        sunset.innerHTML = response["sys"]["sunset"]
    })
    .catch( err => console.error(err));
}


submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value)
}) 

getWeather("Brampton");