abstract class Handler {
    protected Handler nextHandler;

    public void setNextHandler(Handler handler) {
        this.nextHandler = handler;
    }

    public abstract void handleRequest(String request);

    protected void passToNext(String request) {
        if (nextHandler != null) {
            nextHandler.handleRequest(request);
        } else {
            System.out.println("Нет обработчика для запроса: " + request);
        }
    }
}

class ConcreteHandlerA extends Handler {
    @Override
    public void handleRequest(String request) {
        if ("TypeA".equals(request)) {
            System.out.println("ConcreteHandlerA обработал запрос: " + request);
        } else {
            passToNext(request); // Делегируем следующему обработчику
        }
    }
}

class ConcreteHandlerB extends Handler {
    @Override
    public void handleRequest(String request) {
        if ("TypeB".equals(request)) {
            System.out.println("ConcreteHandlerB обработал запрос: " + request);
        } else {
            passToNext(request); // Делегируем следующему обработчику
        }
    }
}

public class Client {
    public static void main(String[] args) {
        Handler handlerA = new ConcreteHandlerA();
        Handler handlerB = new ConcreteHandlerB();
        handlerA.setNextHandler(handlerB);

        handlerA.handleRequest("TypeA"); // ConcreteHandlerA
        handlerA.handleRequest("TypeB"); // ConcreteHandlerB
        handlerA.handleRequest("TypeC"); // Нет обработчика
    }
}