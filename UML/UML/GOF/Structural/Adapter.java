interface Target {
    void request();
}

class Adaptee {
    public void specificRequest() {
        System.out.println("Вызван specificRequest() из Adaptee");
    }
}

class Adapter implements Target {
    private Adaptee adaptee;

    public Adapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }

    @Override
    public void request() {
        adaptee.specificRequest();
    }
}

public class Client {
    public static void main(String[] args) {
        Adaptee adaptee = new Adaptee();
        Target target = new Adapter(adaptee);
        target.request(); // Вывод: "Вызван specificRequest() из Adaptee"
    }
}