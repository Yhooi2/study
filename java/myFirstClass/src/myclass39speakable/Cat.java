package myclass39speakable;

public class Cat implements Speakable{
    public String name;
    public int age;

    @Override
    public void speak(String str) {
        System.out.println("Cat says: " + str + " Meow!");
    }

    @Override
    public void intorduse() {
        System.out.println("Cat is here!");
    }

    @Override
    public String toString() {
        return "Cat: " +this.name + ", " + this.age + " years";
    }

    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Cat){
            Cat cat = (Cat)obj;
            return (this.name.equals(cat.name) && this.age == cat.age) ;
        }
        return false;
    }
}
