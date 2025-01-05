public class OperatingSystem {
    private final String name;
    private final String version;
    private final String architecture;

    public OperatingSystem() {
        this.name = System.getProperty("os.name");
        this.version = System.getProperty("os.version");
        this.architecture = System.getProperty("os.arch");
    }
    public void displayInfo() {
        System.out.println("Операционная система: " + name);
        System.out.println("Версия: " + version);
        System.out.println("Архитектура: " + architecture);
    }
}
