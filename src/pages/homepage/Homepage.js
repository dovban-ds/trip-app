import React from "react";
import Header from "../../components/homepage/Header";
import "./Homepage.css";
import Body from "../../components/homepage/Body";

export default function Homepage() {
  return (
    <div className="homepage-box">
      <Header />
      <Body />
    </div>
  );
}
