import { useState } from "react";
import { MovieDetails } from "./MovieDetails";
import { NavBar, Search, NumResults } from "./NavBar";
import { MoviesList } from "./MoviesList";
import { WatchedSummary } from "./WatchedSummary";
import { WatchedMovieList } from "./WatchedMovieList";
import { useMovies } from "./hooks/useMovies.js";
import { useLocalStorageState } from "./hooks/useLocalStorageState.js";

export const KEY = "98d107b3";
export const Loader = () => <p className="loader">Loading...</p>;
export const ErrorMessage = ({ children }) => (
  <p className="error">{children}</p>
);

export default function App() {
  const [query, setQuery] = useState("");
  const [selectMovie, setSelectMovie] = useState(null);
  // const [watched, setWatched] = useState([]);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  const { movies, isLoading, error } = useMovies(query);

  function handleSelectMovie(selectId) {
    setSelectMovie((id) => (id === selectId ? null : selectId));
  }
  function handleCloseMovie() {
    setSelectMovie(null);
  }

  function handleAddWached(movie) {
    const newWatched = [...watched, movie];
    setWatched((movies) => newWatched);
    handleCloseMovie();
    // localStorage.setItem("watched", JSON.stringify(newWatched));
  }

  function handleDeleteMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

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
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {/* {isLoading ? <Loader /> : <MoviesList movies={movies} />} */}
        </Box>
        <Box>
          {selectMovie ? (
            <MovieDetails
              selectId={selectMovie}
              onCloseMovie={handleCloseMovie}
              watched={watched}
              onAddWatched={handleAddWached}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onSelectMovie={handleSelectMovie}
                onDeleteSelect={handleDeleteMovie}
              />
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
