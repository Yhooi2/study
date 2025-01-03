import java.util.Scanner;

public class Class21_String_Builder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();
        StringBuilder stringBuilder = new StringBuilder(str);
        for (int i=0;i<stringBuilder.length();i++){
            char c = stringBuilder.charAt(i);
            if(i%2 == 0){
                stringBuilder.setCharAt(i, Character.toUpperCase(c));
            }else{
                stringBuilder.setCharAt(i, Character.toLowerCase(c));
            }
        }

        System.out.println(stringBuilder);
        stringBuilder.append(1);
        System.out.println(stringBuilder);
        stringBuilder.insert(stringBuilder.length(), "World");
        System.out.println(stringBuilder);
        stringBuilder.delete(1, stringBuilder.length());
        System.out.println(stringBuilder);
        stringBuilder = new StringBuilder("Hello World");
        stringBuilder.reverse();
        System.out.println(stringBuilder);

    }
}
