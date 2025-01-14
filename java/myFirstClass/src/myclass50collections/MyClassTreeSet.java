package myclass50collections;

import java.util.TreeSet;

public class MyClassTreeSet {
    // Вам Нужно Реализовать Класс,
    // создать сет студентов и попробуйте его поместить в TreeSet


    public static void main(String[] args) {
        TreeSet<Student> treeSet = new TreeSet<>((st1, st2) ->
                st1.getName().compareTo(st2.getName()) == 0 ?
                st1.getAge() - st2.getAge() : st1.getName().compareTo(st2.getName()));
        treeSet.add(new Student("Ivan", 20));
        treeSet.add(new Student("Petr", 21));
        treeSet.add(new Student("Alexandr", 22));
        treeSet.add(new Student("Alexandr", 23));
        treeSet.add(new Student("Alexandr", 24));
        treeSet.add(new Student("Andrey", 25));
        treeSet.add(new Student("Dmitriy", 26));
        treeSet.add(new Student("Nikolay", 27));
        treeSet.add(new Student("Alexandr", 28));
        treeSet.add(new Student("Evgeniy", 29));
        treeSet.add(new Student("Oleg", 30));
        treeSet.add(new Student("Denis", 31));
        treeSet.add(new Student("Anton", 32));
        treeSet.add(new Student("Fedor", 33));
        treeSet.add(new Student("Konstantin", 34));
        treeSet.add(new Student("Aleksandr", 35));
        treeSet.add(new Student("Yuriy", 36));
        treeSet.add(new Student("Kirill", 37));
        treeSet.add(new Student("Roman", 38));
        treeSet.add(new Student("Artem", 39));
        treeSet.add(new Student("Egor", 40));
        treeSet.forEach(System.out::println);


    }
}
class Student {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public String getName() { return name; }
    public int getAge() { return age; }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
