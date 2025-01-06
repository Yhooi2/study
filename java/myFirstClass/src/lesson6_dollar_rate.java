import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

public class lesson6_dollar_rate {
    public static void main(String[] args) throws IOException {
        String page = "";
        try {
             page = downloadWebPage("https://cbr.rru/scripts/XML_dynamic.asp?date_req1=27/12/2024&date_req2=28/12/2024&VAL_NM_RQ=R01235");
        } catch (Exception e) {
            throw new CbrNotAvailableException(e);
        }
        int startIdx = page.lastIndexOf("<Value>");
        int endIdx = page.lastIndexOf("</Value>");
        String rate = page.substring(startIdx + 7, endIdx);
        System.out.println(rate);

        String page1 = downloadWebPage("https://cbr.ru/scripts/XML_dynamic.asp?date_req1=27/12/2023&date_req2=28/12/2023&VAL_NM_RQ=R01235");
        int startIdx1 = page1.lastIndexOf("<Value>");
        int endIdx1 = page1.lastIndexOf("</Value>");
        String rate1 = page1.substring(startIdx1 + 7, endIdx1);
        System.out.println( rate1);

        double course = Double.parseDouble(rate.replace(',', '.'));
        double course1 = Double.parseDouble(rate1.replace(',', '.'));
        System.out.println("Difference without one year: " + Math.abs(course - course1));
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
