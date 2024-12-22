
public class MySecondClass {
    public static void main(String[] args)  {
        int x = 3;
        int y = 1;
        System.out.println(x);
        System.out.println(y);

        if (x < 10) {
            System.out.println("x are small");
        }
        while (x < 20) {
            x += 1;
            System.out.println(x);
        }

        String str = "Hello word";

        System.out.println(str.toUpperCase() + str.length());
        System.out.println(str.replace("o","a"));
        String str1 = str.toLowerCase();
        System.out.println(str1);
        String str2 = str1.replaceAll("hello", "bay");
        System.out.println(str2);
        if (str2.contains("b")) {
            System.out.println(str2.charAt(0));
        }
        int n = str2.length() - 1;
        while (n >= 0) {
            System.out.print(str2.charAt(n));
            n -= 1;
        }
        System.out.println();

        System.out.println("This is the end");


    }

}
