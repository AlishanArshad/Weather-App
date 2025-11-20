const apiKey = 'b6723a4959bc49a838336c7a6efd8a38';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

searchBtn.addEventListener('click', () =>{
    checkWeather(searchBox.value);
});

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind-speed').innerHTML = data.wind.speed + ' km/h';
    document.querySelector('.uv-index').innerHTML = data.main.uvi;
    document.querySelector('.weather-icon').src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
}
// checkWeather();