package myclass32;

import java.util.Scanner;

public class MyClass32 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        if (b == 0) {
            RuntimeException exception = new RuntimeException("Деление на ноль");
            throw exception;

        }
        System.out.println(a / b);

        System.out.println("Input 2 words");
        String line = sc.nextLine(); //пропускает пустую строку после ввода числа
        line = sc.nextLine();
        String[] words = line.split(" ");

        if (words.length != 2){
            RuntimeException exception = new RuntimeException("Неверное количество слов");
            throw exception;
        }
        System.out.println(words[0] + " " + words[1]);
}
}
