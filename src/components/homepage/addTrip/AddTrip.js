import React, { useState } from "react";
import "./AddTrip.css";
import TripModal from "../tripModal/TripModal";

export default function AddTrip({ setAcceptedTrip }) {
  const [tripModal, setTripModal] = useState(false);

  return (
    <div
      className="addtrip-card"
      onClick={() => (tripModal ? setTripModal(false) : setTripModal(true))}
    >
      <div className="sign">➕</div>
      <div>Add trip</div>
      {tripModal && (
        <TripModal
          modalStatus={setTripModal}
          setAcceptedTrip={setAcceptedTrip}
        />
      )}
    </div>
  );
}
