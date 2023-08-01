import React from "react";
import "./Details.css";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../../Loader";

export default function Details({ showModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState(null);
  const [actualDay, setActualDay] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kyiv/2023-08-01/2023-08-31?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cname%2Caddress%2CresolvedAddress%2Ctempmax%2Ctempmin%2Ctemp%2Cicon&include=days%2Chours%2Calerts&key=DUHV9L7A5VHFKQQF4DD39KYW2&contentType=json",
      {}
    )
      .then((response) => response.json())
      .then((info) => {
        setData(info);
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
          break;
        }
      }
      setLoader(false);
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

  console.log(actualDay, data);

  const h = () => {
    showModal();
  };
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
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
            <div>
              <p>icon</p>
              <p className="current-temp">
                {actualDay.temp}
                <span>°C</span>
              </p>
            </div>
            <p className="current-city">{data.address}</p>

            <p className="counter">counter</p>
          </div>
        </div>
      )}
    </>
  );
}
