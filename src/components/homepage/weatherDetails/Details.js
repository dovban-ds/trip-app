import React from "react";
import "./Details.css";
import { useState } from "react";

export default function Details({ showModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const h = () => {
    showModal();
  };
  return (
    <div
      className="details-overlay"
      onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
    >
      <div
        className={`details ${isOpen ? "slideOut" : "slideIn"}`}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={() => (isOpen ? h() : null)}
      >
        <p className="day">Day</p>
        <div>
          <p>icon</p>
          <p className="current-temp">
            current temp <span>°C</span>
          </p>
        </div>
        <p className="current-city">city</p>

        <p className="counter">counter</p>
      </div>
    </div>
  );
}
