interface State {
    void handle(Context context);
}
class OnlineState implements State {
    @Override
    public void handle(Context context) {
        System.out.println("Пользователь онлайн: можно отправлять сообщения");
        // Пример переключения состояния
        context.setState(new BusyState());
    }
}

class BusyState implements State {
    @Override
    public void handle(Context context) {
        System.out.println("Пользователь занят: сообщения будут сохранены");
        context.setState(new OfflineState());
    }
}

class OfflineState implements State {
    @Override
    public void handle(Context context) {
        System.out.println("Пользователь оффлайн: сообщения недоступны");
    }
}

class Context {
    private State currentState;

    public Context() {
        this.currentState = new OfflineState(); // Начальное состояние
    }
    public void setState(State state) {
        this.currentState = state;
    }
    public void request() {
        currentState.handle(this);
    }
}

public class Client {
    public static void main(String[] args) {
        Context chat = new Context();

        chat.request(); // OfflineState
        chat.setState(new OnlineState());
        chat.request(); // OnlineState → переключает на BusyState
        chat.request(); // BusyState → переключает на OfflineState
    }
}