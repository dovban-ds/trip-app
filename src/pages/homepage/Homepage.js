import React, { useContext, useEffect } from "react";
import Header from "../../components/homepage/header/Header";
import "./Homepage.css";
import Body from "../../components/homepage/body/Body";
import { TripsContext } from "../../provider/accepterTrips.provider";
import jwtDecode from "jwt-decode";

export default function Homepage() {
  const { user, setUser } = useContext(TripsContext);

  const handleCallbackResponse = async (response = response) => {
    const userObj = await jwtDecode(response.credential);
    await setUser(userObj);
    document.getElementById("signInDiv").hidden = true;
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "167322193376-ceon6a8tttf9ibsrijrb7co7omrqrp9n.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="homepage-box">
      <div>
        <Header />
        <Body />
      </div>
    </div>
  );
}
