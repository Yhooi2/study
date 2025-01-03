import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.Scanner;

public class Class19_itunes_api {
    public static void main(String[] args) throws IOException {
        String term = getUserInput();
        String url = buildURL(term);
        String page = downloadUrl(url);

        //System.out.println(page);
        printResult(page);
    }
    static void printResult(String page) {
        String wrapperType = getType("wrapperType\":\"", page);
        StringBuilder result = new StringBuilder();
        result.append("Unknown type: \n");
        result.append(page);

        if (wrapperType.equals("audiobook")) {
            result.delete(0, result.length());
            result = buildBookResult(page);

        } else if (wrapperType.equals("track")) {
            String kind = getType("kind\":\"", page);

            if (kind.equals("song")) {
                result.delete(0, result.length());
                result = buildResult(page, "artistName\":\"", "trackName\":\"");

            } else if (kind.equals("feature-movie")) {
                result.delete(0, result.length());
                result = buildResult(page, "trackName\":\"", "longDescription\":\"");
            }
        }
        System.out.println(result.toString());
    }

    private static String getType(String str, String page) {
        int start = page.indexOf(str) + str.length();
        int end = page.indexOf("\"", start);
        String wrapperType = page.substring(start, end);
        return wrapperType;
    }

    static StringBuilder buildResult(String page, String str1, String str2) {
        StringBuilder result = new StringBuilder();
        String artistName = getType(str1, page);

        String trackName = getType(str2, page).replaceAll("<br />", "\n");
        result.append(artistName).append("\n").append(trackName);
        return result;
    }

    static StringBuilder buildBookResult(String page) {
        StringBuilder result = new StringBuilder();

        String artistName = getType("artistName\":\"", page);
        String bookName = getType("collectionName\":\"", page);
        String description = getType("description\":\"", page);

        result.append(artistName).append("\n").append(bookName).append("\n").append(description);
        return result;
    }

    static String buildURL(String searchQuery){
        String searchTerm = searchQuery.replaceAll(" ", "+");
        String api = "https://itunes.apple.com/search?term=";
        String limit = "&limit=1";//System.out.println(searchTerm);
        return api + searchTerm + limit;
    }

    static String getUserInput() {
        System.out.println("What's you looking for in iTunes?");
        Scanner scanner = new Scanner(System.in);
        return scanner.nextLine();
    }

    static String downloadUrl(String url) throws IOException {
        StringBuilder result = new StringBuilder();
        String line;
        URLConnection urlConnection = new URL(url).openConnection();
        try (InputStream is = urlConnection.getInputStream();
            BufferedReader br = new BufferedReader(new InputStreamReader(is))) {
            while ((line = br.readLine()) != null) {
                result.append(line);
            }
        }

        return result.toString();
    }
}
