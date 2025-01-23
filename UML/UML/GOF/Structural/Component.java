import java.util.ArrayList;
import java.util.List;

interface Component {
    void operation();
}

class Leaf implements Component {
    @Override
    public void operation() {
        System.out.println("Leaf operation");
    }
}

class Composite implements Component {
    private List<Component> children = new ArrayList<>();

    public void add(Component component) {
        children.add(component);
    }

    public void remove(Component component) {
        children.remove(component);
    }

    @Override
    public void operation() {
        System.out.println("Composite operation start");
        for (Component child : children) {
            child.operation();
        }
        System.out.println("Composite operation end");
    }
}

public class Client {
    public static void main(String[] args) {
        Component leaf1 = new Leaf();
        Component leaf2 = new Leaf();

        Composite composite = new Composite();
        composite.add(leaf1);
        composite.add(leaf2);

        composite.operation();
    }
}