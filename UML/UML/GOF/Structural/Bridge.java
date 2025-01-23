interface Color {
    String fill();
}

class Red implements Color {
    @Override
    public String fill() {
        return "красный";
    }
}

class Blue implements Color {
    @Override
    public String fill() {
        return "синий";
    }
}

abstract class Shape {
    protected Color color;

    public Shape(Color color) {
        this.color = color;
    }

    abstract void draw();
}

class Circle extends Shape {
    public Circle(Color color) {
        super(color);
    }

    @Override
    void draw() {
        System.out.println("Рисуем круг цветом: " + color.fill());
    }
}

public class Client {
    public static void main(String[] args) {
        Shape redCircle = new Circle(new Red());
        redCircle.draw(); // Рисуем круг цветом: красный

        Shape blueCircle = new Circle(new Blue());
        blueCircle.draw(); // Рисуем круг цветом: синий
    }
}