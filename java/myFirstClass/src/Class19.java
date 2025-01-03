import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.Scanner;

public class Class19 {
    public static void main(String[] args) throws IOException {
        String term = getUserInput();
        String url = buildURL(term);
        String page = downloadUrl(url);

        printResult(page);
    }
    static void printResult(String page) {
        int start = page.indexOf("kind\":\"") + "kind\":\"".length();
        int end = page.indexOf("\"", start);
        System.out.println(page.substring(start,end));
    }

    static String buildURL(String searchQuery){
        String searchTerm = searchQuery.replaceAll(" ", "+");
        String api = "https://itunes.apple.com/search?term=";
        String limit = "&limit=1";//System.out.println(searchTerm);
        return api+searchTerm+limit;
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
