package myclass50collections;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashSet;

public class MyClassHashSet {

    // Возьмите любую цитату, запишите её в файл и попробуйте прочитать её
    // посчитав количество уникальных слов в тексте.

    public static void main(String[] args) {
        String s = getText();
        HashSet<String> hashSet = new HashSet<>();
        String[] words = s.split("[\\s.,;:!?]+");
        for (String word : words){
            hashSet.add(word.toLowerCase()); // добавляем слова в сет
        }
        System.out.println(hashSet.size());// выводим размер сета(количество уникальных слов)
    }

    private static String getText() {
        StringBuilder text = new StringBuilder();
        String line;
        try (BufferedReader br = new BufferedReader(new FileReader("text.txt"))) {
            while ((line = br.readLine()) != null) {
                text = text.append(line).append("\n");
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
        return text.toString();



    }
}
