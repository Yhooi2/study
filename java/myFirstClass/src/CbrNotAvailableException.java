public class CbrNotAvailableException extends RuntimeException{
    CbrNotAvailableException(Exception cause) {
        super("Cbr not available", cause);
    }
}
