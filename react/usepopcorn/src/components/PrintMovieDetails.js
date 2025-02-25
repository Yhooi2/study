import StarsRaiting from "./StarsRaiting";
import { useState } from "react";

export function PrintMovieDetails({ movie, watched, onAddWatched }) {
  const [rating, setRating] = useState();

  function handleAddMove() {
    const addMovie = { ...movie, userRating: rating };
    onAddWatched(addMovie);
  }

  function getUserRating() {
    const watchedMovie = watched.find(
      (watchedMovie) => watchedMovie.imdbID === movie.imdbID
    );
    return watchedMovie?.userRating || 0;
  }

  return (
    <>
      <header>
        <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
        <div className="details-overview">
          <h2>{movie.Title}</h2>
          <p>
            {movie.Released} &bull; {movie.Runtime}
          </p>
          <p>{movie.Genre}</p>
          <p>
            <span> {movie.imdbRating > 8 ? "🏆" : "⭐️"} </span>
            {movie.imdbRating} IMDb rating
          </p>
        </div>
      </header>
      <section>
        <div className="rating">
          <StarsRaiting
            maxStars={10}
            size={24}
            onSetRating={setRating}
            defaultRating={getUserRating}
          />
          {rating > 0 && !getUserRating() > 0 && (
            <button className="btn-add" onClick={handleAddMove}>
              + Add to list
            </button>
          )}
        </div>
        <p>
          <em>{movie.Plot}</em>
        </p>
        <p>Starring {movie.Actors}</p>
        <p>Director {movie.Director}</p>
      </section>
    </>
  );
}
