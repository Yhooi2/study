import java.io.FileInputStream;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Scanner;

public class lesson9_FileInputStream_PrintWriter {
    public static void main(String[] args) throws Exception {
        InputStream stream = new FileInputStream("myFirstClass/qwerty.txt");
        Scanner sc = new Scanner(stream);
        int x = sc.nextInt();
        char operator = sc.next().charAt(0); // считываем символ
        int y = sc.nextInt(); // считываем целое число
        PrintWriter writer = new PrintWriter("out.txt");
        if (operator == '*') {
            writer.print("Произведение чисел: ");
            writer.println(x * y);
            System.out.println(x*y);
        }
        writer.close();
    }

}
