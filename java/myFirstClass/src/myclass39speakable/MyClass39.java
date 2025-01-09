package myclass39speakable;

public class MyClass39 {
    public static void main(String[] args) {
        Speakable cat = new Cat();
        Speakable dog = new Dog();
        Speakable donkey = new Donkey();

        sayhello(cat);
        sayhello(dog);
        sayhello(donkey);
        Cat cat2 = new Cat();
        cat2.name = "Tom";
        cat2.age = 1;
        System.out.println(cat2);
    }

    public static void sayhello(Speakable speakable) {
        speakable.intorduse();
        speakable.speak("Hello");
    }
}
