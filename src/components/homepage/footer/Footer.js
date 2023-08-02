import React from "react";
import "./Footer.css";

export default function Footer({ tripArr }) {
  // const date = new Date(`${tripArr[0].datetime}`);

  const allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const daysNames = [];

  for (let trip of tripArr) {
    const date = new Date(`${trip.datetime}`);
    const dayOfWeek = date.getDay();
    const dayName = allDays[dayOfWeek];
    daysNames.push(dayName);
  }
  // const dayOfWeek = date.getDay();
  // const dayName = allDays[dayOfWeek];

  console.log(tripArr);
  return (
    <div>
      <div className="footer-title">Week</div>
      <div className="weather">
        {tripArr.map((item, index) => {
          return (
            <div className="weather-card" key={index}>
              <div className="weather-card-day">{daysNames[index]}</div>
              <div className="weather-card-icon">
                <img src={`./${item.icon}.svg`} alt="weather-icon" />
              </div>
              <div className="weather-card-temp">
                {item.tempmax.toFixed(0)}° / {item.tempmin.toFixed(0)}°
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
