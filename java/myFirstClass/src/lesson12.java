import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.nio.file.Files;
import java.nio.file.Paths;

public class lesson12 {
    public static void main(String[] args) throws IOException {
        for (int i = 1; i < 20; ++i) {
            String date = "2024-11-" + (i < 10 ? "0" : "") + Integer.toString(i);

            String page = downloadPage("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + date);
            int urlBegin = page.lastIndexOf("hdurl\":\"");
            int urlEnd = page.lastIndexOf("\",\"media_type");
            if (urlBegin == -1 || urlEnd == -1) continue;
            urlBegin += + "hdurl\":\"".length();
            String url = page.substring(urlBegin, urlEnd);
            try (InputStream in = new URL(url).openStream()) {
                Files.copy(in, Paths.get("NASA/" + date + ".jpg"));
                System.out.println("Image downloaded");
            }
        }

    }

    private static String downloadPage(String url) throws IOException {
        StringBuilder result = new StringBuilder();
        String line;
        URLConnection urlConnection = new URL(url).openConnection();
        try (InputStream is = urlConnection.getInputStream();
             BufferedReader br = new BufferedReader(new InputStreamReader(is))) { //try with resources
            while ((line = br.readLine()) != null) {
                result.append(line);
            }
        }
        return result.toString();

    }
}
