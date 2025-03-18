import { useState } from "react";

export function useGeolocation(defaultpos = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultpos);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos);
        setPosition([pos.coords.latitude, pos.coords.longitude]);
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }
  return { isLoading, position, error, getPosition };
}
