const apikey = "5d50cb77a4d850371ce5a430e31c9b24";
const weatcherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

const getWeatherData = async (cityValue) => {
    console.log(cityValue);
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`;
    try {
        const response = await fetch(apiurl);
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed}m/s`
        ];

        weatcherDataEl.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
        weatcherDataEl.querySelector('.temperature').textContent = `${temp}°C`;
        weatcherDataEl.querySelector('.description').textContent = description;
        weatcherDataEl.querySelector('.details').innerHTML = details.map(detail => `<div>${detail}</div>`).join('');
        weatcherDataEl.classList.remove('hidden');
    } catch (error) {
        console.log(error);
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});






