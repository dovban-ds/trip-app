import React, { useState } from "react";
import "./AddTrip.css";
import TripModal from "../tripModal/TripModal";

export default function AddTrip({ setAcceptedTrip, trip }) {
  const [tripModal, setTripModal] = useState(false);

  return (
    <li
      className="addtrip-card"
      onClick={() => (tripModal ? setTripModal(false) : setTripModal(true))}
      draggable="false"
      ref={trip}
    >
      <div className="sign">➕</div>
      <div>Add trip</div>
      {tripModal && (
        <TripModal
          modalStatus={setTripModal}
          setAcceptedTrip={setAcceptedTrip}
          trip={trip}
        />
      )}
    </li>
  );
}
