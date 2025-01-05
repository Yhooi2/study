package myclass29;

public class MyClass29 {
    public static void main(String[] args) {

        AwesomeString awesomeString = new AwesomeString("Hello World!");
        awesomeString.readString();
        awesomeString.print();
        LimitedAwesomeString limitedAwesomeString = new LimitedAwesomeString(10);
        System.out.println(limitedAwesomeString.str);
        LimitedAwesomeString limitedAwesomeString2 = new LimitedAwesomeString("Hello World!", 10);



    }
}
