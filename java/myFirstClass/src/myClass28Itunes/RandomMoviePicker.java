package myclass28itunes;

import myclass32.RandomMovieNotFoundException;
import utils.PageDownloader;

import java.io.IOException;

public class RandomMoviePicker {
    PageDownloader downloader = new PageDownloader();
    Movie[] getRandomMoviesNames(int count) {
        String url = "https://randommer.io/random-movies";
        String page;
        try {
            page = downloader.downloadWebPage(url);
        } catch (IOException e) {
            throw new RandomMovieNotFoundException(e)
                    ;
        }

        Movie[] movies = new Movie[count];
        int end = 0;
        String title;
        String year;
        for (int i = 0; i < count; i++) {
            String find = "<div class=caption";

            int captionStart = page.indexOf(find, end);
            if(checkExeption(captionStart, i)) break;
            captionStart += + find.length() + 4;
            int captionEnd = page.indexOf("(", captionStart);
            int ageEnd = page.indexOf(")", captionStart) + 1;
            end = ageEnd + 1;

            title = page.substring(captionStart, captionEnd);
            title= title.replaceAll("&#x27;", "\'");
            year = page.substring(captionEnd, ageEnd);
            movies[i] = new Movie(title, year);
        }
        return movies;
    }

    private static boolean checkExeption(int captionStart, int i) {
        if (captionStart == -1 && i == 0) {
            throw new RandomMovieNotFoundException("No movie found!");
        }
        if (captionStart == -1) {
            return true;
        }
        return false;
    }
}
