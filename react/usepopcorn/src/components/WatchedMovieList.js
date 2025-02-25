export function WatchedMovieList({ watched, onSelectMovie, onDeleteSelect }) {
  return (
    <ul className="list list-movies">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          onSelectMovie={onSelectMovie}
          key={movie.imdbID}
          onDeleteSelect={onDeleteSelect}
        />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie, onSelectMovie, onDeleteSelect }) {
  return (
    <li key={movie.imdbID} onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.Runtime} </span>
        </p>
      </div>
      <button
        className="btn-delete"
        onClick={() => onDeleteSelect(movie.imdbID)}
      >
        X
      </button>
    </li>
  );
}
