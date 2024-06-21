import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
const WeatherApp = () => {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Bangalore",
    feelsLike: 30.46,
    humidity: 50,
    temp: 29.59,
    tempMax: 30.8,
    tempMin: 28.9,
    weather: "scattered clouds",
  });

  function updateWeatherInfo(newInfo) {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
