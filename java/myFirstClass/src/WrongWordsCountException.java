public class WrongWordsCountException extends RuntimeException {
    int words;
    WrongWordsCountException(int words) {
        this.words = words;
    }

}
