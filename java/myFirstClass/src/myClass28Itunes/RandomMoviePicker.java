package myclass28itunes;

public class RandomMoviePicker {
    PageDownloader downloader = new PageDownloader();
    Movie[] getRandomMoviesNames(int count) {
        String url = "https://randommer.io/random-movies";
        String page = downloader.downloadWebPage(url);

        Movie[] movies = new Movie[count];
        int end = 0;
        String title;
        String year;
        for (int i = 0; i < count; i++) {
            int captionStart = page.indexOf("caption", end) + "caption".length() + 4;
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
}
