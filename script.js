document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "597d2718f6a9da8136e8cdd07f62c2ce";
    const fetchWeatherButton = document.getElementById("fetchWeather");
    const cityInput = document.getElementById("cityInput");
    const weatherResult = document.getElementById("weatherResult");

    fetchWeatherButton.addEventListener("click", function () {
        const city = cityInput.value;
        if (city.trim() === "") {
            alert("Please enter a city name!!");
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;

                const weatherOutput = `
                <p> Temperature: ${temperature} &#8451;</p>
                <p> Weather: ${weatherDescription}</p>
                `;

                weatherResult.innerHTML = weatherOutput;

                ChangeBGColor(temperature);
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
                weatherResult.innerHTML = "Weather data not available";
            });
    });

    function ChangeBGColor(temperature) {
        const colorchange = document.querySelector('body');

        if (temperature <= 0) {
            colorchange.style.backgroundColor = "rgb(0, 119, 135)";
        } else if (temperature >= 0 && temperature < 10) {
            colorchange.style.backgroundColor = "rgb(0, 178, 201)";
        } else if (temperature >= 10 && temperature < 20) {
            colorchange.style.backgroundColor = "rgb(242, 255, 0)";
        } else if (temperature >= 20 && temperature < 30) {
            colorchange.style.backgroundColor = "rgb(255, 208, 0)";
        } else if (temperature >= 30 && temperature < 40) {
            colorchange.style.backgroundColor = "rgb(255, 111, 0)";
        } else if (temperature >= 40) {
            colorchange.style.backgroundColor = "rgb(179, 0, 0)";
        }
    }
});
