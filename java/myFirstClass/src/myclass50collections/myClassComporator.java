package myclass50collections;

import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class myClassComporator {
    //    Нужно отсортировать случайный список чисел.
    //    Числа нужно отсортировать следующим образом:
    //    Четные идут в начале по возрастанию, нечетные по убыванию в конце списка.

    public static void main(String[] args) {

        Random random = new Random();
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите размер массива");
        int size = scanner.nextInt();
        ArrayList<Integer> nums = new ArrayList<>(size);
        for (int i = 0; i < size; ++i) {
            nums.add(random.nextInt(size));
        }
        nums.sort((a, b) -> a % 2 == 0 && b % 2 == 0 ? a - b : a % 2 != 0 && b % 2 != 0 ? b - a : a % 2 == 0 ? -1 : 1);
        System.out.println(nums.toString());

    }


}

