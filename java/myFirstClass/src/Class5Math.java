import java.util.Scanner;

public class Class5Math {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double a = scanner.nextDouble();
        double pow = scanner.nextDouble();
        System.out.println(Math.pow(a, pow));
        System.out.println(Math.sqrt(a));
        System.out.println(Math.abs(a - pow));
        System.out.println(Math.max(a, pow));
        System.out.println(Math.floor(a));
        System.out.println(Math.random()); // [0, 1)
        System.out.println(((int) Math.random()) * 6 + 1); // (1, 6)

    }
}
