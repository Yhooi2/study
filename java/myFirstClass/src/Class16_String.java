import java.util.Scanner;

public class Class16_String {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();
        char[] chars = str.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            if (i % 2 == 0) {
                chars[i] = Character.toUpperCase(chars[i]);
            } else {
                chars[i] = Character.toLowerCase(chars[i]);
            }
            System.out.print(chars[i]);
            }
        System.out.println();
        String str1 = new String(chars);
        System.out.println(str1);
        scanner.close();
    }
}
