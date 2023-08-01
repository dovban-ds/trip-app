import React, { useState } from "react";
import "./Body.css";
import barcelona from "../../photo/barcelona.jpg";
import tokyo from "../../photo/tokyo.jpg";
import berlin from "../../photo/berlin.jpg";
import kiyv from "../../photo/kyiv.jpg";
import abudhabi from "../../photo/abudhabi.jpg";
import ankara from "../../photo/ankara.jpg";
import athens from "../../photo/athens.jpg";
import london from "../../photo/london.jpg";
import washington from "../../photo/washington.jpg";
import stockholm from "../../photo/stockholm.jpg";

export default function Body() {
  const [inputValue, setInputValue] = useState(" Search your trip");

  return (
    <div className="body-box">
      <div className="input-box">
        <input type="text" value={inputValue} />
      </div>
      {/* <div className="photo-box">
        <img src={barcelona} alt="Barcelona" />
        <img src={tokyo} alt="tokyo" />
        <img src={berlin} alt="berlin" />
        <img src={kiyv} alt="kiyv" />
        <img src={abudhabi} alt="abudhabi" />
        <img src={ankara} alt="ankara" />
        <img src={athens} alt="athens" />
        <img src={london} alt="london" />
        <img src={washington} alt="washington" />
        <img src={stockholm} alt="stockholm" />
      </div> */}
    </div>
  );
}
