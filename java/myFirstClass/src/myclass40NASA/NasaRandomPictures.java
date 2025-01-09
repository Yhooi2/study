package myclass40NASA;

import utils.PageDownloader;
import utils.RandomDateGenerator;

import java.io.IOException;
import java.time.DateTimeException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Random;

public class NasaRandomPictures {
    public  NasaPictureInfo[] randomPics(int count) {
        NasaPictureInfo[] pics = new NasaPictureInfo[count];
        for (int i = 0; i < count; ++i){
            String date = getDateStr();
            String  url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + date;
            PageDownloader downloader = new PageDownloader();
            String json = "";
            try {
                json = downloader.downloadWebPage(url);
            } catch (IOException e) {
                e.printStackTrace();
                throw new IllegalStateException("Can't connect to NASA API");
            }

            String title = getJsonTag("title", json);
            String explanation = getJsonTag("explanation", json);
            String hdUrl = getJsonTag("hdurl", json);
            String mediaType = getJsonTag("media_type", json);
            pics[i] = new NasaPictureInfo(title, date, explanation, hdUrl, mediaType);
        }
        return pics;
    }
    private String getJsonTag(String tag, String json){
        tag = "\"" + tag + "\":\"";
        int begin = json.indexOf(tag) + tag.length();
        int end = json.indexOf("\"", begin);
        return json.substring(begin, end);
    }


    private static String getDateStr() {
        RandomDateGenerator randomDateGenerator = new RandomDateGenerator();
        LocalDate randomDate = randomDateGenerator.getRandomDate(1996,2021);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        return randomDate.format(formatter);
    }

}
