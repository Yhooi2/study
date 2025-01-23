interface Coffee {
    double getCost();
    String getDescription();
}

class SimpleCoffee implements Coffee {
    @Override
    public double getCost() { return 2.0; }

    @Override
    public String getDescription() { return "Базовый кофе"; }
}

abstract class CoffeeDecorator implements Coffee {
    protected final Coffee decoratedCoffee;

    public CoffeeDecorator(Coffee coffee) {
        this.decoratedCoffee = coffee;
    }

    @Override
    public double getCost() {
        return decoratedCoffee.getCost();
    }

    @Override
    public String getDescription() {
        return decoratedCoffee.getDescription();
    }
}

class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) {
        super(coffee);
    }

    @Override
    public double getCost() {
        return super.getCost() + 0.5;
    }

    @Override
    public String getDescription() {
        return super.getDescription() + ", с молоком";
    }
}

class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee coffee) {
        super(coffee);
    }

    @Override
    public double getCost() {
        return super.getCost() + 0.2;
    }

    @Override
    public String getDescription() {
        return super.getDescription() + ", с сахаром";
    }
}

public class CoffeeShop {
    public static void main(String[] args) {
        Coffee order = new SimpleCoffee();
        order = new MilkDecorator(order);
        order = new SugarDecorator(order);

        System.out.println("Заказ: " + order.getDescription());
        System.out.println("Итого: $" + order.getCost());
    }
}