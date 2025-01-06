import utils.PageDownloader;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class MyClass31 {
    public static void main(String[] args) throws InterruptedException {
        LocalDate now = LocalDate.now(); // текущая дата
        LocalDate date = now.minusDays(30); // начало периода

        while (!date.equals(now)) {
            printRate(date);
            date = date.plusDays(1);

        }
    }
    private static void printRate(LocalDate date) {
//        String day = withZero(date.getDayOfMonth());
//        String month = withZero(date.getMonthValue());
//        String dateFormat =  day + "/" + month + "/" + date.getYear();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String dateFormat = formatter.format(date);

        PageDownloader downloader = new PageDownloader();
        String url = "https://cbr.ru/scripts/XML_dynamic.asp?date_req1=" + dateFormat;
        url += "&date_req2=" + dateFormat + "&VAL_NM_RQ=R01235";
        String page = "";
        try {
            page = downloader.downloadWebPage(url);
        } catch(IOException e){}
        int startIdx = page.lastIndexOf("<Value>");

        if (startIdx == -1 ) {
            return;
        }
        int endIdx = page.lastIndexOf("</Value>");
        String rate = page.substring(startIdx + 7, endIdx);
        System.out.println(date + ": " +rate);
    }
//    private static String withZero(int num){
//        return (num < 10 ? "0" : "") + num;
//    }
}
