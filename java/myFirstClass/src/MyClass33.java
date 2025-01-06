import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class MyClass33 {
    public static void main(String[] args) throws IOException {
        // isNum();
        // tryToWords();
        writeToFile();
    }

    private static void writeToFile() throws IOException {
        Scanner sc = new Scanner(System.in);
        try(BufferedWriter writer = new BufferedWriter(new FileWriter("out.txt"))) {
            System.out.println("x: ");
            int x = sc.nextInt();
            System.out.println("y: ");
            int y = sc.nextInt();
            writer.write(x + "/" + y + "=" + x / y);
        }

    }

    private static void tryToWords() {
        try {
            twoWords();
        } catch (WrongWordsCountException ex) {
            if (ex.words == 1) {
                System.out.println("You entered only one word, please enter two words");
            } else if (ex.words > 2){
                System.out.println("You should enter only two words");
                throw ex;
            }

        } finally {
            System.out.println("Finally block");
        }
    }

    private static void isNum() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Started");
        try {
            System.out.println("Enter a number: ");
            char ch = sc.next().charAt(0);
            if (!Character.isDigit(ch)) {
                throw new RuntimeException("Not a digit");
            }
            System.out.println("You entered: " + ch);
            int num = (int)ch - 48; // convert character to integer
            System.out.println(" Square of the number is: " + num * num);

        } catch (RuntimeException e) {
            System.err.println("The is some error!!!");
            System.out.println(e.getMessage());
            //e.printStackTrace();
            System.out.println("Program ended");
        }
    }

    static void twoWords() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Please enter 2 words: ");
        String len = sc.nextLine();
        String[] words = len.split(" "); //split string into array by
        if (words.length != 2) {
            throw new WrongWordsCountException(words.length);
        }
        System.out.println(words[1] + "-" + words[0]);
        int lettersCount = words[1].length() + words[0].length();
        System.out.println("Count letters " + lettersCount);
    }
}
