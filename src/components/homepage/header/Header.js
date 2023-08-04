import React from "react";
import "./Header.css";
import Search from "../search/Search";

export default function Header() {
  return (
    <>
      <div className="header-box">
        <div className="title">
          Weather <strong>Forecast</strong>
        </div>
        <Search />
      </div>
    </>
  );
}
