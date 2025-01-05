package myclass29;

public class LimitedAwesomeString extends  AwesomeString {
    int limit;

    LimitedAwesomeString(int limit) {
        this.limit = limit;
    }
    LimitedAwesomeString(String str, int limit) {
        this.limit = limit;
    }
}
