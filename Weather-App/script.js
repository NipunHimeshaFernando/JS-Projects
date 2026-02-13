import API_KEY from "./config.js";

const weatherData = document.querySelector(".weather-data");
const cityName = document.querySelector("#city-name");
const form = document.querySelector("form");
const imgIcon = document.querySelector(".icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(cityName.value);
  const cityValue = cityName.value;

  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`,
    );
    if (!response.ok) {
      throw new Error("Network response is not ok!");
    }

    const data = await response.json();
    // console.log(data);

    const temprature = Math.floor(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const details = [
      `Feels Like: ${Math.floor(data.main.feels_like)}°C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind Speed: ${data.wind.speed} m/s`,
    ];

    weatherData.querySelector(".temp").textContent = `${temprature}°C`;
    weatherData.querySelector(".desc").textContent = `${description}`;

    imgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">`;

    weatherData.querySelector(".details").innerHTML = details
      .map((detail) => {
        return `<div>${detail}</div>`;
      })
      .join("");
  } catch (err) {
    weatherData.querySelector(".temp").textContent = "";
    imgIcon.innerHTML = "";
    weatherData.querySelector(".desc").textContent = "An Error Occurred!";
  }
}
