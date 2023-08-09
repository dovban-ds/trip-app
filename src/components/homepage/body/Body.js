import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import "./Body.css";
import Card from "../tripCard/Card";
import Details from "../weatherDetails/Details";
import Footer from "../footer/Footer";
import AddTrip from "../addTrip/AddTrip";
import { TripsContext } from "../../../provider/accepterTrips.provider";

export default function Body() {
  const [showModal, setShowModal] = useState(false);
  const [currCity, setCurrCity] = useState();
  const [currDate, setCurrDate] = useState();
  const [footer, setFooter] = useState(false);
  const [tripDateArr, setTripDateArr] = useState([]);

  const [isDrag, setIsDrag] = useState(false);
  const [prevPageX, setPrevPageX] = useState();
  const [prevScrollLeft, setPrevScrollLeft] = useState();
  const [arrws, setArrws] = useState();
  const [scrlWidth, setScrlWidth] = useState();

  const [firstCard, setFirstCard] = useState(null);
  const carousel = useRef(null);

  const { acceptedTrip, setAcceptedTrip } = useContext(TripsContext);

  const handle = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  useEffect(() => {
    const firstCard = carousel.current.querySelector(".card");
    const arrowIcons = document.querySelectorAll("i");

    if (firstCard) {
      setFirstCard(firstCard.clientWidth + 30);
      setArrws(arrowIcons);
      if (carousel.current.scrollWidth > carousel.current.clientWidth) {
        arrws[1].style.display = "block";
      }
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    if (carousel.current.scrollWidth > carousel.current.clientWidth) {
      arrws[1].style.display = "block";
    }
  }, [acceptedTrip]);

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
    // console.log(scrlWidth);
    arrws[0].style.display =
      carousel.current.scrollLeft === 0 ? "none" : "block";
    arrws[1].style.display =
      carousel.current.scrollLeft === scrlWidth ? "none" : "block";

    if (carousel.current.scrollWidth > carousel.current.clientWidth) {
      arrws[1].style.display = "block";
    }
  };

  return (
    <>
      <div className="body-box">
        <div className="trip-cards">
          <i
            className="fa-solid fa-angle-left"
            onClick={(e) => {
              carousel.current.scrollLeft += -firstCard;
              setTimeout(() => showHideIcons(), 60);
            }}
          ></i>
          <ul
            className="carousel"
            onMouseMove={dragging}
            onMouseDown={dragStart}
            onMouseUp={dragStop}
            onMouseLeave={dragStop}
            onTouchStart={dragStart}
            onTouchMove={dragging}
            onTouchEnd={dragStop}
            ref={carousel}
          >
            <Card
              showModal={handle}
              setCity={setCurrCity}
              setFooter={setFooter}
              setDate={setCurrDate}
            />
            <AddTrip />
          </ul>
          <i
            className="fa-solid fa-angle-right"
            onClick={() => {
              carousel.current.scrollLeft += firstCard;
              setTimeout(() => showHideIcons(), 60);
            }}
          ></i>
        </div>
      </div>
      {showModal && (
        <Details
          showModal={handle}
          city={currCity}
          tripDate={currDate}
          setTripFooter={setTripDateArr}
        />
      )}
      {footer && <Footer tripArr={tripDateArr} detailsModal={showModal} />}
    </>
  );
}
