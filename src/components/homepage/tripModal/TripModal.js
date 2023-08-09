import React, { useContext, useRef, useState } from "react";
import "./TripModal.css";
import { cities } from "../../../const/cities";
import { capitalizeFirstLetter } from "../../../api/capitalizeLetter";
import { getCurrentDate } from "../../../api/getCurrentDate";
import { TripsContext } from "../../../provider/accepterTrips.provider";

export default function TripModal({ modalStatus }) {
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

  const { setAcceptedTrip } = useContext(TripsContext);

  const inputRefStart = useRef(null);
  const inputRefEnd = useRef(null);

  const handleCityChange = (event) => {
    const { value } = event.target;
    setSelectedCity(value);
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
    const startDate = new Date(inputs.start.value);
    const endDate = new Date(inputs.end.value);

    const currentDate = new Date();

    const differenceStart = startDate.getTime() - currentDate.getTime();

    const differenceEnd = endDate.getTime() - currentDate.getTime();

    const fifteenDaysInMillis = 15 * 24 * 60 * 60 * 1000;

    if (
      inputs.start.value > inputs.end.value ||
      inputs.start.value < getCurrentDate()
    )
      return alert("Select correct date!");

    if (
      differenceStart > fifteenDaysInMillis ||
      differenceEnd > fifteenDaysInMillis
    )
      return alert("The start/end date should be within the next 15 days");

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

  const foc = (input) => {
    input.current.type = "date";
    return input.current.showPicker();
  };

  const blr = (input) => {
    return (input.current.type = "text");
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
              {Object.entries(cities).map(([key, value]) => (
                <option key={value} value={value}>
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
              type="text"
              placeholder="Select date"
              value={inputs.start.value}
              onChange={(e) => handleInputChange(e, "start")}
              onFocus={() => {
                foc(inputRefStart);
              }}
              onTouchStart={() => {
                foc(inputRefStart);
              }}
              onBlur={() => {
                blr(inputRefStart);
              }}
              ref={inputRefStart}
            />
          </div>
          <div className="end-input">
            <p className="input-title">
              <span className="important">*</span> End date
            </p>
            <input
              type="text"
              placeholder="Select date"
              value={inputs.end.value}
              onChange={(e) => handleInputChange(e, "end")}
              onFocus={() => {
                foc(inputRefEnd);
              }}
              onTouchStart={() => {
                foc(inputRefEnd);
              }}
              onBlur={() => {
                blr(inputRefEnd);
              }}
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
