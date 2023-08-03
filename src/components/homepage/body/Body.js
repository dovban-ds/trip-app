import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Body.css";
import Search from "../search/Search";
import Card from "../tripCard/Card";
import { cities } from "../../../const/cities";
import Details from "../weatherDetails/Details";
import Footer from "../footer/Footer";
import AddTrip from "../addTrip/AddTrip";

export default function Body() {
  const [showModal, setShowModal] = useState(false);
  const [currCity, setCurrCity] = useState();
  const [currDate, setCurrDate] = useState();
  const [footer, setFooter] = useState(false);
  const [tripDateArr, setTripDateArr] = useState([]);
  const [acceptedTrip, setAcceptedTrip] = useState([
    {
      city: cities.kyiv,
      date: "2023-08-04 - 2023-08-15",
    },
  ]);
  const [firstCard, setFirstCard] = useState(null);
  const carousel = useRef(null);

  const handle = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  useEffect(() => {
    const firstCard = carousel.current.querySelector(".card");
    setFirstCard(firstCard.offsetWidth + 30);
  });

  return (
    <>
      <div className="body-box">
        {/* <Search /> */}
        <div className="trip-cards">
          <i
            className="fa-solid fa-angle-left"
            onClick={(e) => {
              // showHideIcons();
              carousel.current.scrollLeft += -firstCard;
            }}
          ></i>
          <ul className="carousel" ref={carousel}>
            <Card
              info={acceptedTrip}
              showModal={handle}
              setCity={setCurrCity}
              setFooter={setFooter}
              setDate={setCurrDate}
            />
            <AddTrip setAcceptedTrip={setAcceptedTrip} />
          </ul>
          <i
            className="fa-solid fa-angle-right"
            onClick={() => {
              // showHideIcons();
              carousel.current.scrollLeft += firstCard;
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
