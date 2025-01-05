package myClass28Itunes;

import java.awt.*;
import java.io.*;
import java.net.URL;
import java.net.URLConnection;
import java.nio.file.Files;
import java.nio.file.Paths;

public class ItunesMoviePlayer {
    private static final String API = "https://itunes.apple.com/search?term=";
    private  static final String LIMIT = "1";
    private static final String MEDIA_TYPE = "movie";
    void playMovie(String searchRequest) throws IOException {
        String  searchTerm = searchRequest.replaceAll(" ", "+");
        String json = getJson(searchRequest);
        String track = printInfoGetTrack(json);
        String previewLink = getTag("previewUrl", json);

        Runtime.getRuntime().exec("open " + previewLink);
        //download(previewLink, track);
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

    private static String printInfoGetTrack(String json) {

        String artistName = getTag("artistName", json);
        String track = getTag("trackName", json);
        String longDescription = getTag("longDescription", json);

        System.out.println(artistName);
        System.out.println(track);
        System.out.println(longDescription);

        return track;
    }

    private static String getJson(String searchRequest) throws IOException {
        String term = searchRequest.replaceAll(" ", "+");
        String requestUrl = buildURL(term);
        return downloadWebPage(requestUrl);
    }

    static String getTag(String key, String json){ //get the first song name
        int start = json.indexOf(key) + key.length() + 3;
        int end = json.indexOf("\"", start);
        return json.substring(start,end);
    }
    static String buildURL(String searchQuery){
        String searchTerm = searchQuery.replaceAll(" ", "+");
        String limit = "&limit=" + LIMIT;
        String mediaType = "&media=" + MEDIA_TYPE;
        return API + searchTerm + limit + mediaType;
    }
    static String downloadWebPage(String url) throws IOException {
        StringBuilder result = new StringBuilder();
        String line;
        URLConnection urlConnection = new URL(url).openConnection();

        try (InputStream is = urlConnection.getInputStream();
             BufferedReader br = new BufferedReader(new InputStreamReader(is))) {

            while ((line = br.readLine()) != null) {
                result.append(line);
            }
            return result.toString();
        }
    }
}
