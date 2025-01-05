package myclass29;

import java.util.Scanner;

public class AwesomeString {
    String name = "Noname";
    String str;
    Scanner scanner;

    AwesomeString(String str) {
        this.str = str;
        this.scanner = new Scanner(System.in);
    }
    AwesomeString() {
        this("");
        System.out.println("Default constructor");
    }

    void readString() {
        System.out.println(this.name + " input string: ");
        this.str = scanner.nextLine();// считываем строку с консоли и сохраняем в переменную name
    }
    void print() {
        System.out.println("Hello! My name is " + this.name + " Your string: " + this.str); // выводим на экран значение переменной str
    }
}
