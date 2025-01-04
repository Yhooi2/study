import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.Scanner;


public class Class19_itunes_api {
    private static final String API = "https://itunes.apple.com/search?term=";
    private  static final String LIMIT = "100";

    public static void main(String[] args) throws IOException {
        String term = getUserInput();
        String url = buildURL(term);
        String page = downloadUrl(url);

        extractedAndPrint(page);
    }

    private static void extractedAndPrint(String page) {
        String num = getType("resultCount\":", page);
        int count = Integer.parseInt(num.substring(0, num.length() - 3));
        if (count == 0){
            System.out.println("No results found.");
            return;
        }

        int[] ids = new int[count];
        for (int i = 0; i < count; i++){
            page = getNextPage(page);
            int id = getId(page);
            if (checkExist(ids, id)){ //if it doesn't exist add it and print
                ids[i] = id;
                printResult(page);
            }
        }
    }

    private static boolean checkExist(int[] arr, int target){
        for (int i : arr) {
            if (i == target) {
                return false;
            }
        }
        return true;
    }

    private static int getId(String page) {
        String id = getType("Id\":", page);
        id = id.substring(0, id.length() - 2);
        return Integer.parseInt(id);
    }

    private static void printResult(String page) {
        String wrapperType = getType("wrapperType\":\"", page);
        System.out.println(getResult(page, wrapperType));
    }

    private static String getResult(String page, String wrapperType) {
        StringBuilder result = new StringBuilder();
        result.append(wrapperType).append("\n");

        if (wrapperType.equals("audiobook")) {
            result = buildBookResult(page);
            result.append(wrapperType);

        } else if (wrapperType.equals("track")) {
            String kind = getType("kind\":\"", page);

            if (kind.equals("song")) {
                result = buildResult(page, "artistName\":\"", "trackName\":\"");

            } else if (kind.equals("feature-movie")) {
                result = buildResult(page, "trackName\":\"", "shortDescription\":\"");
            }
            result.append(kind).append("\n");
        }
        return result.toString();
    }
    private static String getNextPage(String page){
        int endIndex = page.indexOf("}") + 1;
        return page.substring(endIndex);
    }

    private static String getType(String str, String page) {
        int start = page.indexOf(str) + str.length();
        int end = page.indexOf("\"", start);
        end = (page.charAt(end - 1) == '\\') ? end - 1 : end;
        return page.substring(start, end);
    }

    private static StringBuilder buildResult(String page, String str1, String str2) {
        StringBuilder result = new StringBuilder();
        String artistName = getType(str1, page);
        String genre = getType("primaryGenreName", page);
        String trackName = getType(str2, page).replaceAll("<br />", "\n");
        result.append(artistName).append("\n");
        result.append(genre).append("\n");
        result.append(trackName).append("\n");
        return result;
    }

    private static StringBuilder buildBookResult(String page) {
        StringBuilder result = new StringBuilder();

        String artistName = getType("artistName\":\"", page);
        String bookName = getType("collectionName\":\"", page);
        String description = getType("description\":\"", page);

        result.append(artistName).append("\n").append(bookName).append("\n").append(description);
        return result;
    }

    private static String buildURL(String searchQuery){
        String searchTerm = searchQuery.replaceAll(" ", "+");
        String limit = "&limit=" + LIMIT;//System.out.println(searchTerm);
        return API + searchTerm + limit;
    }

    private static String getUserInput() {
        System.out.println("What's you looking for in iTunes?");
        Scanner scanner = new Scanner(System.in);
        return scanner.nextLine();
    }

    private static String downloadUrl(String url) throws IOException {
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
