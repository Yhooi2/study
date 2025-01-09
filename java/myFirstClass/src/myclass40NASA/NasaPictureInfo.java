package myclass40NASA;

public class NasaPictureInfo {
    public String title;
    public String date;
    public String explanation;
    public String url;
    public String media_type;

    public NasaPictureInfo(String title, String date, String explanation, String url, String media_type) {
        this.title = title;
        this.date = date;
        this.explanation = explanation;
        this.url = url;
        this.media_type = media_type;
    }

    @Override
    public String toString() {
        return this.media_type + " : " + this.title + " (" + this.date + ")";
    }

    public String getPrettyExplanation() {
        return this.explanation.replaceAll("\\.", ".\n");
    }
}
