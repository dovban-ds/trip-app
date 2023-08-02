import React from "react";
import "./Card.css";

export default function Card({ city, date, showModal, setCity }) {
  const cardHandle = () => {
    setCity(city);
    showModal();
  };

  return (
    <div className="card" onClick={() => cardHandle()}>
      <div className="card-title">
        <img src={`./${city.toLowerCase()}.jpg`} alt={city} />
      </div>
      <div className="card-body">
        <p className="city">{city}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
