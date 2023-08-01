import React from "react";
import "./Card.css";

export default function Card({ city, date, showModal }) {
  return (
    <div className="card" onClick={() => showModal()}>
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
