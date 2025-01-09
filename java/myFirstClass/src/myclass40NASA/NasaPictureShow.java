package myclass40NASA;

import java.util.Scanner;

public class NasaPictureShow {
    public void show(int count) {
        NasaRandomPictures randomPictures = new NasaRandomPictures();
        System.out.println("Searching pictures...");
        NasaPictureInfo[] pictures = randomPictures.randomPics(count);
        System.out.println("Found pictures: ");
        for (int i = 0; i < pictures.length; i++) {
            System.out.println(i + 1 + ". " + pictures[i]);
        }
        System.out.print("Enter picture number to see it: ");
        Scanner scanner = new Scanner(System.in);
        int answer = scanner.nextInt() -1  ;
        NasaPictureDownloader downloader = new NasaPictureDownloader();
        downloader.downloadAndOpen(pictures[answer]);

    }
}
