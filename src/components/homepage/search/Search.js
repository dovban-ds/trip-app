import React, { useContext, useState } from "react";
import "./Search.css";
import { TripsContext } from "../../../provider/accepterTrips.provider";
import { searchTrip } from "../../../api/searchTrip";

export default function Search() {
  const initialInputValue = "Search your trip";

  const [inputValue, setInputValue] = useState(initialInputValue);
  const [isInputFocused, setInputFocused] = useState(false);
  // const [prevInputValue, setPrevInputValue] = useState("");
  const [initTripArr, setInitTripArr] = useState();

  const { acceptedTrip, setAcceptedTrip, setIsSearch } =
    useContext(TripsContext);

  const handleFocus = async () => {
    await setInputFocused(true);
    await setIsSearch(true);
    if (inputValue === initialInputValue) {
      await setInputValue("");
      await setInitTripArr(acceptedTrip);
    }
  };

  const handleBlur = async () => {
    await setInputFocused(false);
    if (inputValue.trim() === "") {
      await setInputValue(initialInputValue);
      await setIsSearch(false);
    }
  };

  const handleChange = async (event) => {
    await setInputValue(event.target.value);
    const searchedTrips = searchTrip(initTripArr, event.target.value);
    await setAcceptedTrip(searchedTrips);
  };

  const handleSort = async () => {
    const sorted = acceptedTrip.slice().sort((a, b) => {
      const aDate = new Date(a.date.slice(0, 10)).getTime();
      const bDate = new Date(b.date.slice(0, 10)).getTime();

      return aDate - bDate;
    });

    await setAcceptedTrip(sorted);
  };

  return (
    <div className="search-box">
      <div className="input-box">
        <input
          type="text"
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
      <div className="sort-btn">
        <button onClick={handleSort}>Sort by closest</button>
      </div>
    </div>
  );
}
