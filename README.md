# Weather-App
🌦️ Weather App

A simple and clean Weather App built using HTML, CSS, and JavaScript, powered by the OpenWeatherMap API.
Users can search any city to view real-time weather information including:

🌡️ Temperature

🌬️ Wind Speed

💧 Humidity

🔆 UV Index

🌤️ Weather Icon

🚀 Features

Search any city to get live weather updates

Fetches data in metric units (°C + km/h)

Displays:

City name

Temperature

Humidity

Wind speed

UV Index (via OneCall API)

Weather icon (sun, clouds, rain, etc.)

Fully responsive user interface

Clean and modern card layout

🛠️ Technologies Used

HTML5 – Structure

CSS3 – Styling

JavaScript (ES6) – API requests + DOM updates

OpenWeatherMap API – Weather & UV index data

📡 API Used
1️⃣ Current Weather API

Used to fetch:

city name

temperature

humidity

wind speed

weather icon

latitude & longitude (for UV index)

Endpoint format:

https://api.openweathermap.org/data/2.5/weather?units=metric&q={CITY}&appid={API_KEY}

2️⃣ One Call API

Used to fetch:

UV index

Endpoint format:

https://api.openweathermap.org/data/2.5/onecall?lat={LAT}&lon={LON}&exclude=hourly,daily,minutely,alerts&appid={API_KEY}

📂 Project Structure
📁 weather-app
│── index.html
│── style.css
│── script.js
│── search.png
│── humidity.png
│── wind.png
│── uv-index.png
│── sun.png (or other weather icons)
│── README.md

🔧 Setup Instructions

Clone or download the project:

git clone https://github.com/yourusername/weather-app.git


Open index.html in your browser.

Replace the API key in script.js:

const apiKey = 'YOUR_API_KEY_HERE';


Start searching cities! 🌍
