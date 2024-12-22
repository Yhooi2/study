import java.security.spec.RSAOtherPrimeInfo;
import java.util.Arrays;
import java.util.Scanner;

public class lesson3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Input first integer number: ");
        int x = scanner.nextInt();
        System.out.println("Input second integer number: ");
        int y = scanner.nextInt();
        if (x > y) {
            System.out.println(x / y);
        } else {
            System.out.println(y / x);
        }
        String str = scanner.next();
        System.out.println(str.substring(0, 5));
    }
}
