import React, { useState } from "react";
import "./Body.css";
import Search from "../search/Search";
import Card from "../tripCard/Card";
import { cities } from "../../../const/cities";
import Details from "../weatherDetails/Details";

export default function Body() {
  const [showModal, setShowModal] = useState(false);

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
            date="04.08.2023 - 07.08.2023"
            showModal={handle}
          />
        </div>
      </div>
      {showModal && <Details showModal={handle} />}
    </>
  );
}
