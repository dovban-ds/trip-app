export const searchTrip = (arr, input) => {
  const searchedTrips = arr.filter((trip) => {
    return trip.city.toLowerCase().startsWith(input.toLowerCase());
  });

  return searchedTrips;
};
