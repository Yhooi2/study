interface Subject {
    void request();
}
class RealSubject implements Subject {
    @Override
    public void request() {
        System.out.println("RealSubject: Обработка запроса");
    }
}

class Proxy implements Subject {
    private RealSubject realSubject;

    private boolean checkAccess() {
        System.out.println("Proxy: Проверка прав доступа");
        return true; // Упрощенная логика проверки
    }

    @Override
    public void request() {
        if (checkAccess()) {
            if (realSubject == null) {
                realSubject = new RealSubject();
            }
            realSubject.request();
            logAccess();
        }
    }

    private void logAccess() {
        System.out.println("Proxy: Логирование доступа");
    }
}

public class Client {
    public static void main(String[] args) {
        Subject proxy = new Proxy();
        proxy.request();
    }
}