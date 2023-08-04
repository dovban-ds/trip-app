import React from "react";
import Header from "../../components/homepage/header/Header";
import "./Homepage.css";
import Body from "../../components/homepage/body/Body";
import { TripProvider } from "../../provider/accepterTrips.provider";

export default function Homepage() {
  return (
    <div className="homepage-box">
      <div>
        <TripProvider>
          <Header />
          <Body />
        </TripProvider>
      </div>
    </div>
  );
}
