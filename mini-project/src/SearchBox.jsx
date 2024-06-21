import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { red } from "@mui/material/colors";

const SearchBox = ({ updateInfo }) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "001d239ba5f8ac745eb59f5a452871d6";
  async function getWeatherInfo() {
    try {
      let res = await fetch(
        `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await res.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }

  function handleChangeInput(evnt) {
    setCity(evnt.target.value);
  }
  async function onSubmit(evnt) {
    try {
      evnt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError("No Such Place Exits!");
    }
  }

  return (
    <div className="searchbox">
      <form onSubmit={onSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChangeInput}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <b>
            <p style={{ color: "red" }}>No such Place exits in our api</p>
          </b>
        )}
      </form>
    </div>
  );
};

export default SearchBox;

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={001d239ba5f8ac745eb59f5a452871d6}
