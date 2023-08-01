import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const initialInputValue = "Search your trip";

  const [inputValue, setInputValue] = useState(initialInputValue);
  const [isInputFocused, setInputFocused] = useState(false);
  const [prevInputValue, setPrevInputValue] = useState("");

  const handleFocus = () => {
    setInputFocused(true);
    if (inputValue === initialInputValue) {
      setInputValue("");
    }
  };

  const handleBlur = () => {
    setInputFocused(false);
    if (inputValue.trim() === "") {
      setInputValue(initialInputValue);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="input-box">
      <input
        type="text"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
}
