package myclass39speakable;

public class MyClass39 {
    public static void main(String[] args) {
        Speakable speakable = new Cat();
        Speakable speakable2 = new Dog();
        Speakable speakable3 = new Donkey();

        sayhello(speakable);
        sayhello(speakable2);
        sayhello(speakable3);
    }

    public static void sayhello(Speakable speakable) {
        speakable.intorduse();
        speakable.speak("Hello");
    }
}
