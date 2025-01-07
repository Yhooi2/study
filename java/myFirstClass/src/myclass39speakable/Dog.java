package myclass39speakable;

public class Dog implements Speakable {
    @Override
    public void speak(String str) {
        System.out.println("Dog says: " + str + " Woof woof!");
    }

    @Override
    public void intorduse() {
        System.out.println("I am a dog.");
    }
}
