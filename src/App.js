import { useState } from "react";
import { useGeolocator } from "./useGeolocator";

export default function App() {
  const [countClicks, setCountClicks] = useState(0);

  //destructure the variables and call up the custom Hook
  const { isLoading, getPosition, error, lat, lng } = useGeolocator();

  function handleClick() {
    setCountClicks((count) => count + 1);

    //call/use getPostion from custom hook
    getPosition();
  }

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
