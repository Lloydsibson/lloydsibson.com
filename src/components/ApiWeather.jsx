import React, { useEffect, useState } from "react";
import "./ApiWeather.scss";

export const WeatherAPI = () => {
  const [weatherIcon, setWeatherIcon] = useState("");
  const [displayWeather, setdisplayWeather] = useState(false);

  // RUN FUNCTION ONCE DOM HAS LOADED
  useEffect(() => {
    getLocation();
  });

  const getLocation = () => {
    // GEOLOCATION BROWSER API
    if (navigator.geolocation) {
      const showPosition = async (position) => {
        try {
          //console.log(position);
          const currentLat = await position.coords.latitude;
          const currentLong = await position.coords.longitude;
          // FETCH WEATHER API
          const fetchWeatherInfo = await fetch(
            `https://weatherapi-com.p.rapidapi.com/current.json?q=${currentLat},${currentLong}`,
            {
              method: "GET",
              headers: {
                "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
              },
            }
          );

          const jsonWeatherInfo = await fetchWeatherInfo.json();
          //console.log(jsonWeatherInfo);
          const weatherApiIcon = jsonWeatherInfo.current.condition.icon;
          // SET STATE
          setWeatherIcon(weatherApiIcon);
          setdisplayWeather(true);
          // const weatherApiTemp = jsonWeatherInfo.current.temp_c;
          const navLogo = document.getElementById("nav-logo");
          const navTitle = document.getElementById("nav-title");
          // HIDE MONOCODE LOGO
          navLogo.style.display = "none";
          // UPDATE NAV TITLE
          navTitle.innerHTML = `Your <span>Weather</span>`;
        } catch (e) {
          console.log(e);
        }
      };
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };

  return (
    <>
      <img
        id="weather-api-icon"
        className={displayWeather ? "-show" : null}
        src={weatherIcon}
        alt="weather api icon"
      />
    </>
  );
};
