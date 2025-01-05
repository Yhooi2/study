package myclass27inheritance;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;

public class ItunesPreviewPlayer {
    void play(ITunesProduct product) throws IOException {
        String previewLink = product.previewUrl;
        String track = product.collectionName;
        System.out.println("Play: " + track);
        Runtime.getRuntime().exec("open " + previewLink);
        // download(previewLink, track);
    }
    private static void download(String previewLink, String track) throws IOException {
        try (InputStream in = new URL(previewLink).openStream()) {
            String fileExtension = previewLink.substring(previewLink.length() - 4);
            String fileName = track + fileExtension;
            System.out.println("Download " + fileName + "..." );
            fileName = fileName.replaceAll(" ", "");
            Files.copy(in, Paths.get(fileName));
            System.out.println("Downloaded");
            openFile(fileName);
        }
    }

    private static void openFile(String fileName) throws IOException {
        Desktop desktop = Desktop.getDesktop();
        desktop.open(new File(fileName));
    }

}

