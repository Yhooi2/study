import java.util.ArrayList;
import java.util.List;

class NewsAgency {
    private List<Observer> observers = new ArrayList<>();

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update();
        }
    }

    public void publishNews() {
        System.out.println("Новая новость!");
        notifyObservers();
    }
}

interface Observer {
    void update();
}

class NewsSubscriber implements Observer {
    @Override
    public void update() {
        System.out.println("Подписчик получил уведомление");
    }
}

public class Main {
    public static void main(String[] args) {
        NewsAgency agency = new NewsAgency();
        NewsSubscriber subscriber = new NewsSubscriber();

        agency.addObserver(subscriber);
        agency.publishNews(); // Вывод: "Подписчик получил уведомление"
    }
}