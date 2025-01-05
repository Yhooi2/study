package myClass28Itunes;

import java.io.IOException;
import java.util.Scanner;

public class MyClass28 {
    public static void main(String[] args) throws IOException {
//        myClass28Itunes.ItunesMoviePlayer player = new myClass28Itunes.ItunesMoviePlayer();
//        player.playMovie("Terminator");
        RandomMoviePicker moviePicker = new RandomMoviePicker();
        ItunesMoviePlayer player = new ItunesMoviePlayer();
        System.out.println("Choose count of random movies you want to see(max is 16):");
        Scanner sc = new Scanner(System.in);
        int count = Integer.parseInt(sc.nextLine());
        Movie[] movies = moviePicker.getRandomMoviesNames(count);
        for (int i = 0; i < movies.length; i++) {
            System.out.println(i + 1 + ": " + movies[i].title + movies[i].year);
        }
        System.out.println("Enter number of movie you want to watch:");
        int num = Integer.parseInt(sc.nextLine());

        player.playMovie(movies[num-1].title);

    }
}
