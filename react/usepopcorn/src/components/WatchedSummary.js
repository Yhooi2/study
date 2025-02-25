export function WatchedSummary({ watched }) {
  function round(num) {
    return Math.round(num * 10) / 10;
  }

  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = round(
    average(
      watched.map((movie) =>
        movie.imdbRating !== "N/A" ? movie.imdbRating : 5
      )
    )
  );
  const avgUserRating = round(
    average(watched.map((movie) => movie.userRating))
  );
  const avgRuntime = round(
    average(watched.map((movie) => movie.Runtime.split(" ")[0]))
  );
  return (
    <>
      <div className="summary">
        <h2>Movies you watched</h2>
        <div>
          <p>
            <span>#️⃣</span>
            <span>{watched.length} movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>{avgImdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{avgUserRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{avgRuntime} min</span>
          </p>
        </div>
      </div>
    </>
  );
}
