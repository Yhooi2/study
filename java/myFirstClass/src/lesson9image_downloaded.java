import java.io.*;
import java.net.URL;
import java.net.URLConnection;
import java.nio.file.Files;
import java.nio.file.Paths;

public class lesson9image_downloaded {
    public static void main(String[] args) {
        String page = downloadPage("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        int urlBegin = page.lastIndexOf("hdurl\":\"") + "hdurl\":\"".length();
        int urlEnd = page.lastIndexOf("\",\"media_type");
        String url = page.substring(urlBegin, urlEnd);
        try(InputStream in = new URL(url).openStream()) {
            Files.copy(in, Paths.get("NASA.jpg"));
            System.out.println("Image downloaded");
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
        int explainBegin = page.lastIndexOf("\"explanation\":\"") + "\"explanation\":\"".length();
        int explainEnd = page.lastIndexOf("\",\"hdurl");

        String explanation = page.substring(explainBegin, explainEnd);
        System.out.println(explanation);
    }

    private static String downloadPage(String url) {
        StringBuilder result = new StringBuilder();
        String line;
        URLConnection urlConnection;
        try {
            urlConnection = new URL(url).openConnection();
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
        try (InputStream is = urlConnection.getInputStream();
             BufferedReader br = new BufferedReader(new InputStreamReader(is))) {
            while ((line = br.readLine()) != null) {
                result.append(line);
            }
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
        return result.toString();

    }
}
