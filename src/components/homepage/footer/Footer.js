import React, { useContext, useEffect, useRef, useState } from "react";
import "./Footer.css";
import { TripsContext } from "../../../provider/accepterTrips.provider";

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

  const [isDrag, setIsDrag] = useState(false);
  const [prevPageX, setPrevPageX] = useState();
  const [prevScrollLeft, setPrevScrollLeft] = useState();
  const [arrws, setArrws] = useState();
  const [scrlWidth, setScrlWidth] = useState();

  const carousel = useRef(null);

  const daysNames = [];

  const { acceptedTrip } = useContext(TripsContext);

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

  useEffect(() => {
    const arrowIcons = document.querySelectorAll(".arrow");

    if (arrowIcons) {
      setArrws(arrowIcons);
    } else {
      return;
    }
  }, []);

  const dragging = (e) => {
    if (!isDrag) return;
    carousel.current.scrollLeft = e.pageX;
    carousel.current.classList.add("dragging");
    let posDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.current.scrollLeft = prevScrollLeft - posDiff;
    showHideIcons();
  };

  const dragStart = async (e) => {
    setIsDrag(true);
    setPrevPageX(e.pageX || e.touches[0].pageX);
    setPrevScrollLeft(carousel.current.scrollLeft);
  };

  const dragStop = (e) => {
    setIsDrag(false);
    carousel.current.classList.remove("dragging");
  };

  const showHideIcons = async () => {
    await setScrlWidth(
      carousel.current.scrollWidth - carousel.current.clientWidth
    );
    arrws[0].style.display =
      carousel.current.scrollLeft === 0 ? "none" : "block";
    arrws[1].style.display =
      carousel.current.scrollLeft === scrlWidth ? "none" : "block";
  };

  useEffect(() => {
    if (carousel.current.scrollWidth > carousel.current.clientWidth) {
      arrws[1].style.display = "block";
    }
  }, [acceptedTrip]);

  return (
    <div>
      <div className="footer-title">Week</div>
      <div className="carousel-wrapper">
        <button
          className="arrow left"
          onClick={() => {
            handleScrollLeft();
            setTimeout(() => showHideIcons(), 60);
          }}
        >
          &lt;
        </button>
        <div
          className={detailsModal ? "small weather" : "full weather"}
          ref={carousel}
          onMouseMove={dragging}
          onMouseDown={dragStart}
          onMouseUp={dragStop}
          onMouseLeave={dragStop}
          onTouchStart={dragStart}
          onTouchMove={dragging}
          onTouchEnd={dragStop}
        >
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
                    draggable={false}
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
          onClick={() => {
            handleScrollRight();
            setTimeout(() => showHideIcons(), 60);
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
