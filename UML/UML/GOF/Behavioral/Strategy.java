interface Strategy {
    void execute();
}

class ConcreteStrategyA implements Strategy {
    @Override
    public void execute() {System.out.println("Алгоритм A");}
}

class ConcreteStrategyB implements Strategy {
    @Override
    public void execute() {System.out.println("Алгоритм B");}
}

class Context {
    private Strategy strategy;

    public void setStrategy(Strategy strategy) {this.strategy = strategy;}

    public void executeStrategy() {strategy.execute();}
}

// 4. Клиентский код
public class Client {
    public static void main(String[] args) {
        Context context = new Context();

        // Используем стратегию A
        context.setStrategy(new ConcreteStrategyA());
        context.executeStrategy(); // Вывод: Алгоритм A

        // Переключаемся на стратегию B
        context.setStrategy(new ConcreteStrategyB());
        context.executeStrategy(); // Вывод: Алгоритм B
    }
}