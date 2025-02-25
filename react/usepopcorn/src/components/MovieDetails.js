import { useState, useEffect } from "react";
import { KEY, Loader, ErrorMassage } from "./App";

export function MovieDetails({
  children,
  selectId,
  onCloseMovie,
  setMovieInfo,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${selectId}`
          );
          const data = await res.json();
          if (data.Response === "False") throw new Error(data.Error);
          setMovieInfo(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      getMovieDetails();
    },
    [selectId]
  );
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {isLoading && <Loader />}
      {!isLoading && !error && children}
      {error && <ErrorMassage>{error}</ErrorMassage>}
    </div>
  );
}
