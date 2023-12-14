import React, { useEffect, useState } from "react";
import "./WeatherApp.css";
import clear from "../Assets/clear.png";
import cloud from "../Assets/cloud.png";
import drizzle from "../Assets/drizzle.png";
import humidity from "../Assets/humidity.png";
import rain from "../Assets/rain.png";
import searchi from "../Assets/search.png";
import snow from "../Assets/snow.png";
import wind from "../Assets/wind.png";

const WeatherApp = () => {
  const [city, setCity] = useState("bangalore");
  const [humid, setHumid] = useState();
  const [temp, setTemp] = useState();
  const [cityName, setCityName] = useState();
  const [windy, setWindy] = useState();
  const [wicon, setwicon] = useState(clear);
  const [error, setError] = useState(false);
  const key = process.env.REACT_APP_API_KEY;
  console.log(key);
  const search = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const data = await fetch(url);
    const response = await data.json();
    console.log(data);
    if (data.status !== 200) {
      return setError(true);
    }
    setHumid(response.main?.humidity);
    setWindy(Math.floor(response.wind?.speed));
    setTemp(response.main?.temp - 273.15);
    setCityName(response?.name);
    if (response.weather[0].icon.includes("1")) {
      setwicon(clear);
    } else if (response.weather[0].icon.includes("2")) {
      setwicon(cloud);
    } else if (response.weather[0].icon.includes("3")) {
      setwicon(drizzle);
    } else if (response.weather[0].icon.includes("4")) {
      setwicon(drizzle);
    } else if (response.weather[0].icon.includes("9")) {
      setwicon(rain);
    } else if (response.weather[0].icon.includes("10")) {
      setwicon(rain);
    } else if (response.weather[0].icon.includes("13")) {
      setwicon(snow);
    } else {
      setwicon(clear);
    }
  };
  const twoDecimalPlace = (num) => {
    return Number(num).toFixed(0);
  };
  useEffect(() => {
    search();
  }, []);
  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Search City"
          onChange={(e) => {
            setCity(e.target.value);
            setError(false);
          }}
        />
        <div className="search-icon" onClick={search}>
          <img src={searchi} alt="" />
        </div>
      </div>
      {error && <div className="error">Please Select a valid city</div>}
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">{twoDecimalPlace(temp)}&#176;C</div>
      <div className="weather-location">{cityName}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{humid}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{windy} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
