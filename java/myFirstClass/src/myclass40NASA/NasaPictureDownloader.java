package myclass40NASA;

import java.awt.*;
import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;

public class NasaPictureDownloader {
    public void downloadAndOpen(NasaPictureInfo info) {
        System.out.println("Downloading " + info + "...");
        System.out.println("Description" + info.getPrettyExplanation());
        System.out.println(info.url);
        String url = info.url;
        System.out.println(url);

        try (InputStream in = new URL(info.url).openStream()) {
            String[] arr = info.url.split("\\.");
            String fileExtension = arr[arr.length - 1];
            String fileName = info.title + "." + fileExtension;
            System.out.println(fileName + " " + fileExtension);
            Files.copy(in, Paths.get(fileName));
            System.out.println("Image downloaded");
            Desktop desktop = Desktop.getDesktop();
            desktop.open(new File(fileName));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
