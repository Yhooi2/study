import java.util.HashMap;
import java.util.Map;

// 1. Интерфейс Prototype
interface Prototype extends Cloneable {
    Prototype clone();
}

// 2. ConcretePrototype
class ConcretePrototype implements Prototype {
    private String field;

    public ConcretePrototype(String field) {
        this.field = field;
    }

    @Override
    public Prototype clone() {
        return new ConcretePrototype(this.field); // Поверхностное копирование
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }
}

// 3. PrototypeRegistry
class PrototypeRegistry {
    private Map<String, Prototype> prototypes = new HashMap<>();

    public void addPrototype(String key, Prototype prototype) {
        prototypes.put(key, prototype);
    }
    public Prototype getPrototype(String key) {
        return prototypes.get(key).clone();
    }
}

// 4. Client
public class Client {
    public static void main(String[] args) {
        // Инициализация реестра
        PrototypeRegistry registry = new PrototypeRegistry();
        registry.addPrototype("default", new ConcretePrototype("Initial Value"));

        // Клонирование объекта
        ConcretePrototype prototype = (ConcretePrototype) registry.getPrototype("default");
        prototype.setField("Modified Value");

        // Проверка
        System.out.println(prototype.getField()); // "Modified Value"
        System.out.println(((ConcretePrototype) registry.getPrototype("default")).getField()); // "Initial Value"
    }
}