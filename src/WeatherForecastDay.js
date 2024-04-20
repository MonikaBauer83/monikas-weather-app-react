import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature}°`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}°`;
  }

  return (
    <div className="WeatherForecast-overview">
      <div className="WeatherForecast-icon">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={50} />
      <div className="forecast-temperature">
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
        <span> | </span>
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
      </div>
    </div>
  );
}
