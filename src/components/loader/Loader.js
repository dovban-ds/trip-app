import React from "react";
import "./Loader.css";
import ld from "./loader.svg";

export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader">
        <img src={ld} alt="loader" />
      </div>
    </div>
  );
}
