import React, { useRef, useState } from "react";
import "./TripModal.css";
import { cities } from "../../../const/cities";
import { capitalizeFirstLetter } from "../../../api/capitalizeLetter";
import { getCurrentDate } from "../../../api/getCurrentDate";

export default function TripModal({ modalStatus, setAcceptedTrip }) {
  const [inputs, setInputs] = useState({
    start: {
      type: "text",
      value: "",
    },
    end: {
      type: "text",
      value: "",
    },
  });
  const [selectedCity, setSelectedCity] = useState("");

  const inputRefStart = useRef(null);
  const inputRefEnd = useRef(null);

  const handleCityChange = (event) => {
    const { value } = event.target;
    setSelectedCity(value);
  };

  const handleBlur = (inputName) => {
    setInputs((prevInputs) => {
      const newInputs = { ...prevInputs };
      if (newInputs[inputName].value) {
        newInputs[inputName].type = "date";
      } else {
        newInputs[inputName].type = "text";
      }
      return newInputs;
    });
  };

  const handleClick = async (inputName) => {
    await setInputs((prevInputs) => {
      const newInputs = { ...prevInputs };
      newInputs[inputName].type = "date";
      return newInputs;
    });

    const inputRef = inputName === "start" ? inputRefStart : inputRefEnd;
    inputRef.current.showPicker();
  };

  const handleInputChange = (event, inputName) => {
    const { value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: {
        ...prevInputs[inputName],
        value: value,
      },
    }));
  };

  const submitHandle = (e) => {
    if (
      inputs.start.value > inputs.end.value ||
      inputs.start.value < getCurrentDate()
    )
      return alert("Select correct date!");
    e.preventDefault();
    setAcceptedTrip((prevState) => [
      ...prevState,
      {
        city: capitalizeFirstLetter(selectedCity),
        date: `${inputs.start.value} - ${inputs.end.value}`,
      },
    ]);
    modalStatus(false);
  };

  return (
    <div className="tripmodal-overlay" onClick={() => modalStatus(false)}>
      <div className="trip-modal" onClick={(e) => e.stopPropagation()}>
        <div className="trip-modal-title">
          <p>Create trip</p>
          <div onClick={() => modalStatus(false)}>✖️</div>
        </div>
        <div className="trip-modal-body">
          <div className="city-input">
            <p className="input-title">
              <span className="important">*</span> City
            </p>
            <select name="cities" id="city-select" onChange={handleCityChange}>
              <option value="" disabled selected hidden>
                Please select a city
              </option>
              {Object.keys(cities).map((key) => (
                <option key={key} value={key}>
                  {cities[key]}
                </option>
              ))}
            </select>
          </div>
          <div className="start-input">
            <p className="input-title">
              <span className="important">*</span> Start date
            </p>
            <input
              type={inputs.start.type}
              placeholder="Select date"
              value={inputs.start.value}
              onChange={(e) => handleInputChange(e, "start")}
              onClick={() => handleClick("start")}
              onBlur={() => handleBlur("start")}
              ref={inputRefStart}
            />
          </div>
          <div className="end-input">
            <p className="input-title">
              <span className="important">*</span> End date
            </p>
            <input
              type={inputs.end.type}
              placeholder="Select date"
              value={inputs.end.value}
              onChange={(e) => handleInputChange(e, "end")}
              onClick={() => handleClick("end")}
              onBlur={() => handleBlur("end")}
              ref={inputRefEnd}
            />
          </div>
        </div>
        <div className="trip-modal-footer">
          <button className="cancel" onClick={() => modalStatus(false)}>
            Cancel
          </button>
          <button type="submit" className="save" onClick={submitHandle}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
