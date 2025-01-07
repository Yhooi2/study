package myclass39speakable;

public class Cat implements Speakable{

    @Override
    public void speak(String str) {
        System.out.println("Cat says: " + str + " Meow!");
    }

    @Override
    public void intorduse() {
        System.out.println("Cat is here!");
    }
}
