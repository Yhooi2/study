package myclass39speakable;

public class Donkey implements Speakable {

    @Override
    public void speak(String str) {
        System.out.println("Donkey say " + str + " Hee-haw!");
    }

    @Override
    public void intorduse() {
        System.out.println("I am a donkey");
    }
}
