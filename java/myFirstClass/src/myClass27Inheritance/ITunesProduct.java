package myclass27inheritance;

public class ITunesProduct {
    String artistName;
    String collectionName;
    String previewUrl;
    String artworkUrl100;
    String releaseDate;
    String country;


    void print() {
        System.out.println("Artist Name: " + this.artistName);
        System.out.println("Collection Name: " + this.collectionName);
        System.out.println("Preview URL: " + this.previewUrl);
        System.out.println("Artwork URL (100x100): " + this.artworkUrl100);
        System.out.println("Release Date: " + this.releaseDate);
        System.out.println("Country: " + this.country);
    }
}
