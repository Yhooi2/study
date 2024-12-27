import java.security.spec.RSAOtherPrimeInfo;
import java.util.Objects;
import java.util.Scanner;

public class lesson4 {
    public static void main(String[] args) {

        // Составьте программу, которая переводит переменную из byte в short
        Scanner scanner = new Scanner(System.in);
        byte b = scanner.nextByte();
        System.out.println(((Object) b).getClass());
        System.out.println(Byte.SIZE);
        short sh = (short) b;

        System.out.println(((Object) sh).getClass());
        System.out.println(Short.SIZE);

        // Составьте программу, которая переводит переменную из short в int
        int in = (int) sh;
        System.out.println(((Object) in).getClass());
        System.out.println(Integer.SIZE);

        // Составьте программу, которая переводит переменную из int в long
        long ln = (long) in;
        System.out.println(((Object) ln).getClass());
        System.out.println(Long.SIZE);

        // Составьте программу, которая переводит переменную из long в int
        in = (int) ln;
        System.out.println(((Object) in).getClass());

        // Составьте программу, которая переводит переменную из float в double
        float f = scanner.nextFloat();
        System.out.println(f);
        System.out.println(((Object) f).getClass());
        System.out.println(Float.SIZE);
        double d = (double) f;
        System.out.println(d);
        System.out.println(((Object) d).getClass());
        System.out.println(Double.SIZE);

        // Составьте программу, которая переводит переменную из double в float
        f = (float) d;
        System.out.println(f);

        // Переведите переменную из char в string
        char c = scanner.next().charAt(0);
        System.out.println(Character.SIZE);
        String s = c + "";
        System.out.println(Character.SIZE * s.length());

        // Переведите переменную из char в int и наоборот
        in = (int) c;
        c = (char) in;
        System.out.println(c);
    }
}
