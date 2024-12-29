import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Scanner;

public class lesson9dz {
    public static void main(String[] args) throws IOException {
        taskOne();
        taskTwo();
        taskTreed();
        taskFour();
        taskFive();
        taskSix();
        taskSeven();
    }

    static void taskOne() {
        System.out.println("Task 1");
        Scanner scanner = new Scanner(System.in);
        System.out.print("Введите количество слов: ");
        int wordCount = scanner.nextInt();
        String[] words = new String[wordCount];

        for (int i = 0; i < wordCount; i++)
            words[i] = scanner.next();

        for (int i = wordCount - 1; i >= 0; i--)
            System.out.println(words[i]);
    }

    static void taskTwo() {
        System.out.println("\nTask 2");
        Scanner scanner = new Scanner(System.in);
        System.out.print("Введите количество строк: ");
        int stringCount = scanner.nextInt();
        scanner.nextLine(); // Очищаем буфер после ввода числа
        String[] strings = new String[stringCount];

        for (int i = 0; i < stringCount; i++)
            strings[i] = scanner.nextLine();

        for (int i = stringCount - 1; i >= 0; i--)
            System.out.println(strings[i]);
    }

    static void taskTreed() throws IOException {
        System.out.println("\nTask 3");
        InputStream in = System.in;
        System.out.println("Введите количество символов: ");
        int countChar = in.read() - '0';
        in.read(); // Пропускаем символ новой строки
        char[] chars = new char[countChar];
        while (countChar > 0) {
            chars[--countChar] = (char) in.read();
        }
        System.out.println(chars);
    }

    static void taskFour() throws IOException {
        System.out.println("\nTask 4");
        InputStream in = System.in;
        int countChar = 10;

        System.out.println("Введите 10 символов: ");
        char[] buffer = new char[countChar];
        for (int i = 0; i < countChar; ++i) {
            buffer[i] = ' ';
        }
        for (int i = 0; i < countChar; ++i) {
            char c = (char) in.read();
            if (c == ' ') break;
            buffer[i] = c;
        }
        System.out.println(buffer);
    }

    static void taskFive() throws IOException {
        /* На java Используя Scanner на основе FileInputStream,
        прочесть из файла строку: название другого файла.
        Из этого другого файла прочесть название третьего файла,
        и в третий файл записать букву,
         которую пользователь введет через System.in (без сканера) */
        System.out.println("\nTask 5");

        FileInputStream file1 = new FileInputStream("file1.txt");
        Scanner sc = new Scanner(file1);
        String fileName = sc.next().trim();

        FileInputStream file2 = new FileInputStream(fileName);
        sc = new Scanner(file2);
        fileName = sc.next().trim();

        PrintWriter  writer = new PrintWriter(fileName);
        System.out.println("Введите символ для записи в файл");
        writer.write((char)System.in.read());
        writer.close();
    }

    static void taskSix() throws IOException {
        /* Пользователь вводит 7 символов. Используя System.in(без сканнера),
        считайте целое число до первой не цифры.(пример:«35руб», ответ35.)
        считаем, что первым пользователь всегда вводит цифру.
        Пользователь всегда вводит дробное число(пример ввода:«3.5кг»)
         */
        System.out.println("\nTask 6");
        InputStream in = System.in;
        int countN = 7;
        int n = 0;
        char c = ' ';

        while (countN > 0) {
            n = in.read();
            c = (char) n;
            n -= '0';
            if ((n < 0 || n > 9) && c != '.') break;
            System.out.print(c);
            --countN;
        }
    }

    static void taskSeven() throws IOException {
        /* 7. Пользователь вводит 10 строк. Те из них, в которых есть
        восклицательный знак, выведите в stderr. Попробуйте использовать цикл. */
        System.out.println("\nTask 7");
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < 10; ++i) {
            String str = scanner.nextLine();
            if (str.contains("!")) {
                System.err.println(str);
            }
        }

    }
}
