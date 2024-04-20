import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherToday(props) {
  return (
    <div className="weatherToday-overview">
      <div className="row weatherToday-details">
        <h1>{props.data.city}</h1>
        <div className="col-9">
          <ul>
            <li>
              <FormattedDate date={props.data.date} /> {props.data.description}
            </li>
            <li>
              Humidity: {props.data.humidity} %, Wind: {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="weatherToday col-3">
        <div className="weatherToday-icon">
          <WeatherIcon code={props.data.icon} size={40} />
        </div>
        <span className="weatherToday-temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="weatherToday-unit">°C</span>
      </div>
    </div>
  );
}
