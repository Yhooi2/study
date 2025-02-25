import StarsRaiting from "./StarsRaiting";

export function PrintMovieDeatails({ movie, onClick, rating, setRating }) {
  console.log(rating);
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
          <StarsRaiting maxStars={10} size={24} onSetRating={setRating} />
          {rating > 0 && (
            <button className="btn-add" onClick={onClick}>
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
