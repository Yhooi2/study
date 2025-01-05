package myClass28Itunes;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;

public class ItunesMusicPlayer {
    static PageDownloader downloader = new PageDownloader();
    private static final String API = "https://itunes.apple.com/search?term=";
    private  static final String LIMIT = "1";
    private static final String MEDIA_TYPE = "music";
    void playSong(String searchRequest) throws IOException {
        String json = getJson(searchRequest);
        String track = printInfoGetTrack(json);

        String previewLink = getTag("previewUrl", json);
        Runtime.getRuntime().exec("open " + previewLink);
        // download(previewLink, track);
    }
    private static void download(String previewLink, String track) throws IOException {
        try(InputStream in = new URL(previewLink).openStream()) {
            Files.copy(in, Paths.get(track + ".mp4a"));
            System.out.println("music downloaded");
        }
    }

    private static String printInfoGetTrack(String json) {
        String artist = getTag("artistName", json);
        String track = getTag("trackName", json);
        String album = getTag("collectionName", json);

        System.out.println(artist + " " + track + " ("+album+")");
        return track;
    }

    private static String getJson(String searchRequest) throws IOException {
        String term = searchRequest.replaceAll(" ", "+");
        String requestUrl = buildURL(term);
        return downloader.downloadWebPage(requestUrl);
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
}
