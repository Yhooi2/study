import java.util.Scanner;

public class Class6String {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.next();

        if (str.contains(" ")) {
            System.out.println("You entered multiple words");
        } else {
            System.out.println("You entered one word");
        }

        if (str.endsWith("т") || str.endsWith("ть") || str.endsWith("ся")) {
            System.out.println("Это слово глагол!");
        }
        if (str.equals("fuck")) {
            System.out.println("Сам такой");
        }
    }

}
