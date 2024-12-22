import java.sql.SQLOutput;
import java.util.Scanner;

public class ThirdClass {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Please enter x: ");
        int x = scanner.nextInt();
        System.out.print("Please enter y: ");
        int y = scanner.nextInt();

        if (x > y) {
            System.out.println("win");
        } else {
            System.out.println("loss");
        }
        System.err.println("I'm hacker");
    }
}
