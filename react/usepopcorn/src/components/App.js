import { useState } from "react";
import { useEffect } from "react";
import { MovieDetails } from "./MovieDetails";
import { NavBar, Search, NumResults } from "./NavBar";
import { MoviesList } from "./MoviesList";
import { WatchedSummary } from "./WatchedSummary";
import { WatchedMovieList } from "./WatchedMovieList";
import { PrintMovieDeatails } from "./PrintMovieDeatails";

export const KEY = "98d107b3";
export const Loader = () => <p className="loader">Loading...</p>;
export const ErrorMassage = ({ children }) => (
  <p className="error">{children}</p>
);

export default function App() {
  const [query, setQuery] = useState("");
  const [watched, setWatched] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectMovie, setSelectMovie] = useState(null);
  const [rating, setRating] = useState();
  const [movieInfo, setMovieInfo] = useState("");

  function handleSelectMovie(selectId) {
    setSelectMovie((id) => (id === selectId ? null : selectId));
  }
  function handleCloseMovie() {
    setSelectMovie(null);
  }

  function handleAddWached() {
    setWatched((movies) => [...movies, { ...movieInfo, userRating: rating }]);
    handleCloseMovie();
  }

  useEffect(
    function () {
      async function fetchMovies() {
        setError("");
        setIsLoading(true);
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies");
          }
          const data = await res.json();
          if (data.Response === "False") {
            throw new Error(data.Error);
          }
          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        return;
      }
      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoviesList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMassage>{error}</ErrorMassage>}
          {/* {isLoading ? <Loader /> : <MoviesList movies={movies} />} */}
        </Box>
        <Box>
          {selectMovie ? (
            <MovieDetails
              selectId={selectMovie}
              onCloseMovie={handleCloseMovie}
              setMovieInfo={setMovieInfo}
            >
              {" "}
              <PrintMovieDeatails
                movie={movieInfo}
                rating={rating}
                setRating={setRating}
                onClick={handleAddWached}
              />
            </MovieDetails>
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
