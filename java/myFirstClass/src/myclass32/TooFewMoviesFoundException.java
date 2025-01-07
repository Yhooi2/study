package myclass32;

public class TooFewMoviesFoundException extends RandomMovieNotFoundException {
    public TooFewMoviesFoundException(int moviesFound) {
        super("too few movies found: " + moviesFound);
    }
}
