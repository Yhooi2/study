import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.Scanner;

public class Class12_dollar_rate_chose_date {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter month: ");
        String month = scanner.next();
        System.out.println("Enter year: ");
        String year = scanner.next();
        String date1 = "";
        String date2 = "";
        for (int i = 1; i < 28; ++i) {
            if (i < 10) {
                date1 = "0" + Integer.toString(i);
                if (i < 9) date2 = "0" + Integer.toString(i + 1);
                else date2 = Integer.toString(i + 1);
            } else {
                date1 = Integer.toString(i);
                date2 = Integer.toString(i + 1);
            }
            String page = downloadWebPage("https://cbr.ru/scripts/XML_dynamic.asp?date_req1="
                    + date1 + "/"+ month +"/"+ year +"&date_req2="
                    + date2 + "/" + month +"/"+ year +"&VAL_NM_RQ=R01235");
            int startIdx = page.lastIndexOf("<Value>");
            int endIdx = page.lastIndexOf("</Value>");
            if (startIdx == -1 || endIdx == -1) continue;
            String strRate = page.substring(startIdx + 7, endIdx);
            double rate = Double.parseDouble(strRate.replace(',', '.'));
            System.out.println(date1 + "/"+ month +"/"+ year +": " +rate);

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
