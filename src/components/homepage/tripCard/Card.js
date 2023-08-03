import React from "react";
import "./Card.css";

export default function Card({ info, showModal, setCity, setFooter, setDate }) {
  const cardHandle = (city, date) => {
    setCity(city);
    setDate(date);
    setFooter(true);
    showModal();
  };

  return (
    <>
      {info.map((card, index) => {
        return (
          <div
            className="card"
            onClick={() => cardHandle(card.city, card.date)}
            key={index}
          >
            <div className="card-title">
              <img src={`./${card.city.toLowerCase()}.jpg`} alt={card.city} />
            </div>
            <div className="card-body">
              <p className="city">{card.city}</p>
              <p>{card.date}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
