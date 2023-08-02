import React, { useState } from "react";
import "./Body.css";
import Search from "../search/Search";
import Card from "../tripCard/Card";
import { cities } from "../../../const/cities";
import Details from "../weatherDetails/Details";
import Footer from "../footer/Footer";
import AddTrip from "../addTrip/AddTrip";

export default function Body() {
  const [showModal, setShowModal] = useState(false);
  const [currCity, setCurrCity] = useState();
  const [footer, setFooter] = useState(false);
  const [tripDateArr, setTripDateArr] = useState([]);

  const date = "2023-08-04 - 2023-08-15";

  const handle = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };
  return (
    <>
      <div className="body-box">
        <Search />
        <div className="trip-cards">
          <Card
            city={cities.kyiv}
            date={date}
            showModal={handle}
            setCity={setCurrCity}
            setFooter={setFooter}
          />
          <AddTrip />
        </div>
      </div>
      {showModal && (
        <Details
          showModal={handle}
          city={currCity}
          tripDate={date}
          setTripFooter={setTripDateArr}
        />
      )}
      {footer && <Footer tripArr={tripDateArr} detailsModal={showModal} />}
    </>
  );
}
