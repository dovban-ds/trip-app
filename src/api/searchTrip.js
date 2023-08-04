export const searchTrip = (arr, input) => {
  const searchedTrips = arr.filter((trip) => {
    // console.log(
    //   arr,
    //   trip.city.toLowerCase(),
    //   trip.city.toLowerCase().startsWith(input.toLowerCase()),
    //   input
    // );
    return trip.city.toLowerCase().startsWith(input.toLowerCase());
  });

  // console.log(searchedTrips);

  return searchedTrips;
};
