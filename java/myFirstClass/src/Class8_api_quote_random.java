import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

public class Class8_api_quote_random {
    public static void main(String[] args) throws IOException {
        String page = downloadWebPage("https://zenquotes.io/api/random");
        int start = page.indexOf("\"q\":\"") + "\"q\":".length() + 1;
        int end = page.indexOf("\",\"a\"");
        String quote = page.substring(start,end);
        System.out.println(quote.length() > 100 ? quote.substring(0, 100) + "..." : quote);

        if (page.contains("\"a\":")){
            start = page.indexOf("\"a\":\"") + "\"a\":".length() + 1;
            end = page.indexOf("\",\"h\"") ;
            String author = page.substring(start,end);
            System.out.println(author.equals("Unknown") ? "" : author);
        }
    }
    private static String downloadWebPage(String url) throws IOException {
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
