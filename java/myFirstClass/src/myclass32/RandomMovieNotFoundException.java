package myclass32;

import java.io.IOException;

public class RandomMovieNotFoundException extends  RuntimeException {
    public RandomMovieNotFoundException(String message){
        super(message);
    }

    public RandomMovieNotFoundException(IOException e) {
    }
}
