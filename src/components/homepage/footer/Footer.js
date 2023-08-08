import React, { useState } from "react";
import "./Footer.css";

export default function Footer({ tripArr, detailsModal }) {
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

  const handleScrollLeft = async (event) => {
    const container = document.querySelector(".weather");
    if (container) {
      container.scrollLeft -= 280;
    }
  };

  const handleScrollRight = (event) => {
    const container = document.querySelector(".weather");
    if (container) {
      container.scrollLeft += 280;
    }
  };

  return (
    <div>
      <div className="footer-title">Week</div>
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={handleScrollLeft}>
          &lt;
        </button>
        <div className={detailsModal ? "small weather" : "full weather"}>
          {tripArr.map((item, index) => {
            return (
              <div
                className={
                  detailsModal
                    ? "flex-small weather-card"
                    : "flex-full weather-card"
                }
                key={index}
              >
                <div className="weather-card-day">{daysNames[index]}</div>
                <div className="weather-card-icon">
                  <img
                    src={require(`../../../../public/${item.icon}.svg`)}
                    alt="weather-icon"
                  />
                </div>
                <div className="weather-card-temp">
                  {item.tempmax.toFixed(0)}° / {item.tempmin.toFixed(0)}°
                </div>
              </div>
            );
          })}
        </div>
        <button
          className={detailsModal ? "arrow arr-small" : "arrow right"}
          onClick={handleScrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
