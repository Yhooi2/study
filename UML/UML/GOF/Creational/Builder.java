import java.util.ArrayList;
import java.util.List;

// 1. Product
class Product {
    private List<String> parts = new ArrayList<>();

    public void addPart(String part) {
        parts.add(part);
    }
}

// 2. Builder Interface
interface Builder {
    void buildPartA();
    void buildPartB();
    Product getResult();
}

// 3. ConcreteBuilder
class ConcreteBuilder implements Builder {
    private Product product = new Product();
    @Override
    public void buildPartA() {
        product.addPart("PartA");
    }
    @Override
    public void buildPartB() {
        product.addPart("PartB");
    }
    @Override
    public Product getResult() {
        return product;
    }
}

// 4. Director
class Director {
    private Builder builder;

    public Director(Builder builder) {
        this.builder = builder;
    }

    public Product construct() {
        builder.buildPartA();
        builder.buildPartB();
        return builder.getResult();
    }
}

// 5. Клиентский код
public class Client {
    public static void main(String[] args) {
        Builder builder = new ConcreteBuilder();
        Director director = new Director(builder);
        Product product = director.construct();
        System.out.println(product); // Product parts: PartA, PartB
    }
}