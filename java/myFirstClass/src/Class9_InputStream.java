import java.io.IOException;
// import java.io.InputStream;
import java.io.PrintStream;
import java.util.Scanner;

public class Class9_InputStream {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        int x = scanner.nextInt();
        char operator = scanner.next().charAt(0); //nextLine() -> next()
        int y = scanner.nextInt();
//        InputStream in = System.in;
//        int x = in.read() - '0';
//        char operator = (char)in.read();
//        int y = in.read() - '0';

        PrintStream out = System.out;
        switch(operator){
            case '+':
                out.println(x + y);
                break;
            case '-':
                out.println(x - y);
                break;
            case '*':
                out.println(x * y);
                break;
            case '/':
                if(y == 0){
                    throw new ArithmeticException("Division by zero");
                }else{
                    out.println((double)x / y);
                }
                break;
            case '%':
                out.println(x % y);
                break;
            case '^':
                out.println(Math.pow(x,y));
                break;
            case '&':
                out.println(x & y);
                break;

            case '|':
                out.println(x | y);
                break;

            case '<':
                out.println(x << y);
                break;

            case '>':
                out.println(x >> y);
                break;

            default:
                throw new IllegalArgumentException("Unknown operation");
        }
    }
}
