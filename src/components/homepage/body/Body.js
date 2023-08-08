import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import "./Body.css";
import Search from "../search/Search";
import Card from "../tripCard/Card";
import { cities } from "../../../const/cities";
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

  const [firstCard, setFirstCard] = useState(null);
  const carousel = useRef(null);

  const { acceptedTrip, setAcceptedTrip } = useContext(TripsContext);

  const handle = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  useEffect(() => {
    const firstCard = carousel.current.querySelector(".card");

    if (firstCard) {
      setFirstCard(firstCard.offsetWidth + 30);
    } else {
      return;
    }
  });

  return (
    <>
      <div className="body-box">
        <div className="trip-cards">
          <i
            className="fa-solid fa-angle-left"
            onClick={(e) => {
              carousel.current.scrollLeft += -firstCard;
            }}
          ></i>
          <ul className="carousel" ref={carousel}>
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
