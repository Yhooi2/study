import java.util.Scanner;

public class Class4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Please enter char: ");
        char c = scanner.next().charAt(0);
        int ascii = c;

        if (c >= '0' && c <= '9') {
            System.out.println("It is number " + ascii);
        } else {
            System.out.println("It's char! it has code: " + ascii);
        }



        // Objects class
        String str = scanner.nextLine();

        // Primitive value
        double d  = scanner.nextDouble();
        byte byteVal = 120; // 2^8 256
        short sortVal = 12231; // 2^16
        int intVal = 12312313; // 2^32
        long longVal = 131189751811351L; // 2^64
        float floatVal = 3.14F; // 2^32
        double doubleVal = 3.14;
        boolean boolVal = true;
        char charVal = ' ';


        float floatPi = (float)Math.PI;
        double doublePi = Math.PI;
        System.out.println(floatPi);
        System.out.println(doublePi);
        System.out.println(Integer.MAX_VALUE);
        System.out.println(Integer.MIN_VALUE);
    }
}
