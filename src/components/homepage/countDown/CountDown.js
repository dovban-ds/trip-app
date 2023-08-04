import React, { useEffect, useState } from "react";
import "./CountDown.css";
import { getTimeLeft } from "../../../api/getTimeLeft";
import { getCurrentDate } from "../../../api/getCurrentDate";

export default function CountDown({ beginTrip }) {
  const beginDate = new Date(beginTrip);
  const timeLeft = getTimeLeft(beginDate);

  const [time, setTime] = useState({
    days: timeLeft.days,
    hours: timeLeft.hours,
    minutes: timeLeft.minutes,
    seconds: timeLeft.seconds,
  });

  const decrementTime = () => {
    setTime((prevState) => {
      const { days, hours, minutes, seconds } = prevState;

      if (seconds > 0) {
        return { days, hours, minutes, seconds: seconds - 1 };
      } else if (minutes > 0) {
        return { days, hours, minutes: minutes - 1, seconds: 59 };
      } else if (hours > 0) {
        return { days, hours: hours - 1, minutes: 59, seconds: 59 };
      } else if (days > 0) {
        return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    });
  };

  setTimeout(decrementTime, 1000);

  return (
    <>
      {getCurrentDate() >= beginTrip ? (
        <div className="wish">Have a pleasent journey!</div>
      ) : (
        <div className="countdown-box">
          <div className="days">
            <div className="count-number">{time.days}</div>
            <div className="count-name">DAYS</div>
          </div>
          <div className="hours">
            <div className="count-number">{time.hours}</div>
            <div className="count-name">HOURS</div>
          </div>
          <div className="minutes">
            <div className="count-number">{time.minutes}</div>
            <div className="count-name">MINUTES</div>
          </div>
          <div className="seconds">
            <div className="count-number">{time.seconds}</div>
            <div className="count-name">SECONDS</div>
          </div>
        </div>
      )}
      {/* <div className="countdown-box">
        <div className="days">
          <div className="count-number">{time.days}</div>
          <div className="count-name">DAYS</div>
        </div>
        <div className="hours">
          <div className="count-number">{time.hours}</div>
          <div className="count-name">HOURS</div>
        </div>
        <div className="minutes">
          <div className="count-number">{time.minutes}</div>
          <div className="count-name">MINUTES</div>
        </div>
        <div className="seconds">
          <div className="count-number">{time.seconds}</div>
          <div className="count-name">SECONDS</div>
        </div>
      </div> */}
    </>
  );
}
