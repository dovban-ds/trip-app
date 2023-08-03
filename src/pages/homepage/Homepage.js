import React from "react";
import Header from "../../components/homepage/header/Header";
import "./Homepage.css";
import Body from "../../components/homepage/body/Body";

export default function Homepage() {
  return (
    <div className="homepage-box">
      <div>
        <Header />
        <Body />
      </div>
    </div>
  );
}
