import { createContext, useState } from "react";
import { cities } from "../const/cities";

export const TripsContext = createContext({
  acceptedTrip: [
    {
      city: cities.kyiv,
      date: "2023-08-04 - 2023-08-15",
    },
  ],
  setAcceptedTrip: () => {},
});

export const TripProvider = ({ children }) => {
  const [acceptedTrip, setAcceptedTrip] = useState([
    {
      city: cities.kyiv,
      date: "2023-08-04 - 2023-08-15",
    },
  ]);

  const [isSearch, setIsSearch] = useState(false);

  return (
    <TripsContext.Provider
      value={{ acceptedTrip, setAcceptedTrip, isSearch, setIsSearch }}
    >
      {children}
    </TripsContext.Provider>
  );
};
