public class Singleton {
    // Статическое поле для хранения единственного экземпляра
    private static final Singleton instance = new Singleton();

    // Приватный конструктор
    private Singleton() {
        System.out.println("Singleton instance created");
    }

    // Статический метод для доступа к экземпляру
    public static Singleton getInstance() {
        return instance;
    }

    // Пример метода
    public void doWork() {
        System.out.println("Singleton is working");
    }

    public static void main(String[] args) {
        Singleton singleton = Singleton.getInstance();
        singleton.doWork();
    }
}