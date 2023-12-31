import React, { useContext } from "react";
import "./Card.css";
import { TripsContext } from "../../../provider/accepterTrips.provider";

export default function Card({ showModal, setCity, setFooter, setDate }) {
  const cardHandle = (city, date) => {
    setCity(city);
    setDate(date);
    setFooter(true);
    showModal();
  };

  const { acceptedTrip, setAcceptedTrip } = useContext(TripsContext);

  const handleCardDelete = (city, e) => {
    e.stopPropagation();
    const updatedTrips = acceptedTrip.filter((trip) => trip.city !== city);
    setAcceptedTrip(updatedTrips);
  };

  return (
    <>
      {acceptedTrip.map((card, index) => {
        return (
          <li
            className="card"
            onClick={(e) => {
              e.stopPropagation();
              cardHandle(card.city, card.date);
            }}
            key={index}
            draggable="false"
          >
            <div className="card-title">
              <img
                src={require(`../../../../public/${card.city.toLowerCase()}.jpg`)}
                alt={card.city}
                draggable="false"
              />
            </div>
            <div className="card-body">
              <div className="city-block">
                <p className="city">{card.city}</p>
                <div
                  className="card-del"
                  onClick={(e) => handleCardDelete(card.city, e)}
                >
                  Abandon
                </div>
              </div>
              <p>{card.date}</p>
            </div>
          </li>
        );
      })}
    </>
  );
}
