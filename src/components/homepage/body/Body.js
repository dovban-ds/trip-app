import React from "react";
import "./Body.css";
import Search from "../search/Search";
import Card from "../tripCard/Card";
import { cities } from "../../../const/cities";

export default function Body() {
  return (
    <div className="body-box">
      <Search />
      <div className="trip-cards">
        <Card city={cities.kyiv} date="04.08.2023 - 07.08.2023" />
      </div>
    </div>
  );
}
