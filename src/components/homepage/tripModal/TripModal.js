import React from "react";
import "./TripModal.css";
import { cities } from "../../../const/cities";

export default function TripModal() {
  return (
    <div className="tripmodal-overlay">
      <div className="trip-modal">
        <div className="trip-modal-title">
          <p>Create trip</p>
          <div>✖️</div>
        </div>
        <div className="trip-modal-body">
          <div className="city-input">
            <p>
              <span>*</span> City
            </p>
            <select name="cities" id="city-select">
              {Object.keys(cities).map((key) => (
                <option key={key} value={key}>
                  {cities[key]}
                </option>
              ))}
            </select>
          </div>
          <div className="start-input">
            <p>
              <span>*</span> Start date
            </p>
            ////////////////
          </div>
          <div className="end-input">
            <p>
              <span>*</span> End date
            </p>
          </div>
        </div>
        <div className="trip-modal-footer">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}
