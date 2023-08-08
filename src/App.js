import { useContext, useEffect } from "react";
import Homepage from "./pages/homepage/Homepage";
import jwtDecode from "jwt-decode";
import { TripsContext } from "./provider/accepterTrips.provider";
import { TripProvider } from "./provider/accepterTrips.provider";

function App() {
  return (
    <>
      <TripProvider>
        <Homepage />
      </TripProvider>
    </>
  );
}

export default App;
