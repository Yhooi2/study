class Originator { // Создатель
    private String state;

    public static final class Memento {
        private final String state;

        private Memento(String state) { this.state = state; }
        private String getState() {return state;}
    }

    public Memento createMemento() {return new Memento(state);}
    public void restoreFromMemento(Memento memento) {this.state = memento.getState();}

    public void setState(String state) {this.state = state;}
    public String getState() {return state;}

}

class Caretaker { // Смотритель
    private final List<Originator.Memento> mementos = new ArrayList<>();

    public void addMemento(Originator.Memento m) {mementos.add(m);}
    public Originator.Memento getMemento(int index) {return mementos.get(index);}
}

public class Client {
    public static void main(String[] args) {
        Originator originator = new Originator();
        Caretaker caretaker = new Caretaker();

        originator.setState("Состояние 1");
        caretaker.addMemento(originator.createMemento());

        originator.setState("Состояние 2");
        caretaker.addMemento(originator.createMemento());

        // Восстановление первого состояния
        originator.restoreFromMemento(caretaker.getMemento(0));
        System.out.println("Текущее состояние: " + originator.getState()); // Состояние 1
    }
}