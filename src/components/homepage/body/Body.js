import React, { useState } from "react";
import "./Body.css";
import Search from "../search/Search";
import Card from "../tripCard/Card";
import { cities } from "../../../const/cities";
import Details from "../weatherDetails/Details";

export default function Body() {
  const [showModal, setShowModal] = useState(false);
  const [currCity, setCurrCity] = useState();

  const date = "2023-08-04 - 2023-08-07";

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
          />
        </div>
      </div>
      {showModal && (
        <Details showModal={handle} city={currCity} tripDate={date} />
      )}
    </>
  );
}
