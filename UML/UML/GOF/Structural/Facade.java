// 1. Подсистемы
class SubSystemA {
    public void process() {
        System.out.println("Обработка данных в SubSystemA");
    }
}

class SubSystemB {
    public void validate() {
        System.out.println("Валидация в SubSystemB");
    }
}

class Facade {
    private SubSystemA subsystemA;
    private SubSystemB subsystemB;

    public Facade() {
        subsystemA = new SubSystemA();
        subsystemB = new SubSystemB();
    }

    public void execute() {
        subsystemA.process();
        subsystemB.validate();
    }
}

public class Client {
    public static void main(String[] args) {
        Facade facade = new Facade();
        facade.execute();
    }
}