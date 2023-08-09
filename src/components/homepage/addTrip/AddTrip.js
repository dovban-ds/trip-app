import React, { useContext, useState } from "react";
import "./AddTrip.css";
import TripModal from "../tripModal/TripModal";
import { TripsContext } from "../../../provider/accepterTrips.provider";

export default function AddTrip({ trip }) {
  const [tripModal, setTripModal] = useState(false);

  const { isSearch } = useContext(TripsContext);

  return (
    <>
      {isSearch ? null : (
        <li
          className="addtrip-card"
          onClick={() => (tripModal ? setTripModal(false) : setTripModal(true))}
          draggable="false"
          ref={trip}
        >
          <div className="sign">➕</div>
          <div>Add trip</div>
          {tripModal && <TripModal modalStatus={setTripModal} trip={trip} />}
        </li>
      )}
    </>
  );
}
