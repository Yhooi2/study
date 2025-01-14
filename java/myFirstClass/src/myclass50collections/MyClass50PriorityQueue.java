package myclass50collections;

import java.util.PriorityQueue;

public class MyClass50PriorityQueue {
    public static void main(String[] args) {
        PriorityQueue<Person> queue = new PriorityQueue<>(
                (p1, p2) -> Integer.compare(p1.age, p2.age));
        queue.add(new Person("John", 25));
        queue.add(new Person("Alice", 30));
        queue.add(new Person("Bob", 20));
        queue.add(new Person("Charlie", 35));

        while (!queue.isEmpty()) {
            System.out.println(queue.poll());
        }

    }
}
class Person {

    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
