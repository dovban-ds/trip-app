import Homepage from "./pages/homepage/Homepage";
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
