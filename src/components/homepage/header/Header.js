import React, { useContext } from "react";
import "./Header.css";
import Search from "../search/Search";
import { TripsContext } from "../../../provider/accepterTrips.provider";

export default function Header() {
  const { user, setUser } = useContext(TripsContext);

  const handleSignOut = async () => {
    await setUser({});
    document.getElementById("signInDiv").hidden = false;
  };

  return (
    <>
      <div className="header-box">
        <div className="hallmark">
          <div className="title">
            Weather <strong>Forecast</strong>
          </div>
          <div id="signInDiv"></div>
          {Object.keys(user).length != 0 && (
            <div className="logged-box">
              {Object.keys(user).length != 0 && (
                <div className="username">{user.name}</div>
              )}
              {Object.keys(user).length != 0 && (
                <button className="logout" onClick={(e) => handleSignOut(e)}>
                  Sign Out
                </button>
              )}
            </div>
          )}
        </div>
        <Search />
      </div>
    </>
  );
}
