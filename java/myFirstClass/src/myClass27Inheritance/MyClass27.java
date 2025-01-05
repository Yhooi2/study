package myClass27Inheritance;

public class MyClass27 {
    public static void main(String[] args) {
        ITunesSong song = new ITunesSong();
        song.trackName = "Billie Jean";
        song.artistName = "Michael Jackson";
        song.collectionName = "Thriller";
        song.previewUrl = "https://www.youtube.com/watch?v=ZlXeHfjzYqI";
        song.artworkUrl100 = "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/fc/6d/ba/fc6dbaeb-f37b-b8fc-c7be-d591578439da/source/100x100bb.jpg";
        song.releaseDate = "1982-12-01T05:00Z";
        song.country = "USA";
        song.trackPrice = 1.29;
        song.shortDescription = "This is a short description of the song.";
        song.longDescription = "This is a longer description of the song.";
        song.print();

        ITunesAudiobook audiobook = new ITunesAudiobook();
        audiobook.collectionName = "The Great Gatsby";
        audiobook.artistName = "F. Scott Fitzgerald";
        audiobook.previewUrl = "https://www.youtube.com/watch?v=ZlXeHfjzYqI";
        audiobook.artworkUrl100 = "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/fc/6d/ba/fc6dbaeb-f37b-b8fc-c7be-d591578439da/source/100x100bb.jpg";
        audiobook.releaseDate = "1925-04-10T05:00Z";
        audiobook.country = "USA";
        audiobook.collectionPrice = 14.99;
        audiobook.description = "This is a description of the audiobook.";
        audiobook.print();

        ITunesMovie movie = new ITunesMovie();
        movie.trackName = "Star Wars: Episode IV - A New Hope";
        movie.artistName = "George Lucas";
        movie.collectionName = "Star Wars";
        movie.previewUrl = "https://www.youtube.com/watch?v=ZlXeHfjzYqI";
        movie.artworkUrl100 = "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/fc/6d/ba/fc6dbaeb-f37b-b8fc-c7be-d591578439da/source/100x100bb.jpg";
        movie.releaseDate = "1977-05-25T05:00Z";
        movie.country = "USA";
        movie.trackPrice = 14.99;
        movie.shortDescription = "This is a short description of the movie.";
        movie.longDescription = "This is a longer description of the movie.";
        movie.print();
    }
}
