import React from "react";
import "./Details.css";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../../Loader";
import Footer from "../footer/Footer";
import { getCurrentDate } from "../../../api/getCurrentDate";
import { filterArr } from "../../../api/filterArray";

export default function Details({ showModal, city, tripDate }) {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState(null);
  const [tripArr, setTripArr] = useState([]);
  const [actualDay, setActualDay] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getDate = getCurrentDate();
    // console.log(getDate, tripDate.slice(13));
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${getDate}/${tripDate.slice(
        13
      )}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cname%2Caddress%2CresolvedAddress%2Ctempmax%2Ctempmin%2Ctemp%2Cicon&include=days%2Chours%2Calerts&key=252HXASAVPEKFCMFWWLSH4K6N&contentType=json`,
      {}
    )
      .then((response) => response.json())
      .then((info) => {
        setData(info);
        // console.log(data);
      })
      .catch((err) => {
        console.error(err);
        setLoader(false);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const currDay = new Date().getDate();
      for (let day of data.days) {
        if (parseInt(day.datetime.slice(8)) === currDay) {
          setActualDay(day);
          setTripArr(filterArr(data.days, tripDate.slice(0, 10)));
          setLoader(false);
          // console.log(tripArr);
          break;
        }
      }
    }
  }, [data]);

  const date = new Date();

  const allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = date.getDay();
  const dayName = allDays[dayOfWeek];

  // console.log(actualDay);

  const h = () => {
    showModal();
  };
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div
            className="details-overlay"
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          >
            <div
              className={`details ${isOpen ? "slideOut" : "slideIn"}`}
              onClick={(e) => e.stopPropagation()}
              onAnimationEnd={() => (isOpen ? h() : null)}
            >
              <p className="day">{dayName}</p>
              <div className="temp-cont">
                <img src={`/${actualDay.icon}.svg`} alt="weather-icon" />
                <p className="current-temp">
                  {actualDay.temp.toFixed(0)}
                  <span>°C</span>
                </p>
              </div>
              <p className="current-city">{data.address}</p>

              <p className="counter">counter</p>
            </div>
          </div>
          <div>
            <Footer tripArr={tripArr} />
          </div>
        </>
      )}
    </>
  );
}
