import { createContext, useState } from "react";
import { cities } from "../const/cities";
import { getCurrentDate } from "../api/getCurrentDate";

export const TripsContext = createContext({
  acceptedTrip: [
    {
      city: cities.kyiv,
      date: `${getCurrentDate()} - ${getCurrentDate()}`,
    },
  ],
  setAcceptedTrip: () => {},
});

export const TripProvider = ({ children }) => {
  const [acceptedTrip, setAcceptedTrip] = useState([
    {
      city: cities.kyiv,
      date: `${getCurrentDate()} - ${getCurrentDate()}`,
    },
  ]);

  const [isSearch, setIsSearch] = useState(false);

  const [user, setUser] = useState({});

  return (
    <TripsContext.Provider
      value={{
        acceptedTrip,
        setAcceptedTrip,
        isSearch,
        setIsSearch,
        user,
        setUser,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};
