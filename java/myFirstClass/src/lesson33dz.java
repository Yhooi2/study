import java.util.Scanner;

public class lesson33dz {
    public static void main(String[] args) {
        boolean fl = true;
        Scanner scanner = new Scanner(System.in);
        int num;
        while (fl) {
            System.out.println("Input num: ");
            try {
                int n = Integer.parseInt(scanner.nextLine());
                fl = false;
            } catch (NumberFormatException ex){
                System.out.println("You input not a number");
            }
        }
    }
}
