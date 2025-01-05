package myClass28Itunes;

import java.io.IOException;
import java.util.Scanner;

public class MyClass24 {
    public static void main(String[] args) throws IOException {
        ItunesMusicPlayer player = new ItunesMusicPlayer();
        Scanner sc = new Scanner(System.in);
        System.out.println("Which song do you are looking for: ");
        String songName = sc.nextLine();
        player.playSong(songName);
    }
}
