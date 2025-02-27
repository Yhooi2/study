import { useState, useEffect } from "react";
import { KEY, Loader, ErrorMessage } from "./App";
import { PrintMovieDetails } from "./PrintMovieDetails";
import { useKey } from "./hooks/useKey";
import { useTitle } from "./hooks/useTitle";

export function MovieDetails({
  selectId,
  onCloseMovie,
  watched,
  onAddWatched,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState("");
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
  useKey("Escape", onCloseMovie);

  useTitle(movieInfo.Title);

  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <PrintMovieDetails
          movie={movieInfo}
          watched={watched}
          onAddWatched={onAddWatched}
        />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}
