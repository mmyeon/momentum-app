(function () {
  const apiKey = "ce9cbad00ae19dcd71cb984079f01060";
  const tempElm = document.querySelector(".weather-temp");
  const weatherIcon = document.querySelector(".weather-icon");
  const weatherUnit = document.querySelector(".weather-unit");
  const weatherLocation = document.querySelector(".weather-location");

  function getGeolocation() {
    function success(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      getCurrentWeather(url);
    }

    function error() {
      console.log("'Unable to retrieve your location';");
    }

    if (!navigator.geolocation) {
      console.log("Geolocation is not working");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  getGeolocation();

  function getCurrentWeather(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const {
          weather: [{ icon }],
          main: { temp },
          name,
        } = data;

        tempElm.innerHTML = temp;
        weatherUnit.innerText = "°C";
        weatherLocation.innerText = name;

        weatherIcon.src = `http://openweathermap.org/img/wn/${icon}.png`;
      });
  }
})();
