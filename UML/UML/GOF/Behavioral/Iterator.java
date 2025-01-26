import java.util.List;
import java.util.Arrays;

interface Iterator<T> {
    T next();
    boolean hasNext();
}

interface Aggregate<T> {
    Iterator<T> createIterator();
}

class ConcreteAggregate implements Aggregate<String> {
    private List<String> data = Arrays.asList("A", "B", "C");

    @Override
    public Iterator<String> createIterator() {
        return new ConcreteIterator(this);
    }

    public List<String> getData() {
        return data;
    }
}

class ConcreteIterator implements Iterator<String> {
    private ConcreteAggregate aggregate;
    private int index = 0;

    public ConcreteIterator(ConcreteAggregate aggregate) {
        this.aggregate = aggregate;
    }

    @Override
    public String next() {
        return aggregate.getData().get(index++);
    }

    @Override
    public boolean hasNext() {
        return index < aggregate.getData().size();
    }
}

public class Client {
    public static void main(String[] args) {
        Aggregate<String> aggregate = new ConcreteAggregate();
        Iterator<String> iterator = aggregate.createIterator();

        while (iterator.hasNext()) {
            System.out.println(iterator.next()); // Вывод: A, B, C
        }
    }
}