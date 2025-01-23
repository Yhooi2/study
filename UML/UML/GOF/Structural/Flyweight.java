// 1. Внутреннее состояние (Flyweight)
class TreeType {
    private final String name;
    private final String color;
    private final String texture;

    public TreeType(String name, String color, String texture) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }

    public void draw(int x, int y) {
        System.out.printf("Рисуем %s дерево (%s, %s) в координатах (%d, %d)%n",
                name, color, texture, x, y);
    }
}

// 2. Фабрика (Flyweight Factory)
class TreeFactory {
    private static final Map<String, TreeType> treeTypes = new HashMap<>();

    public static TreeType getTreeType(String name, String color, String texture) {
        String key = name + color + texture;
        return treeTypes.computeIfAbsent(key, k -> new TreeType(name, color, texture));
    }
}

// 3. Внешнее состояние (Client)
class Tree {
    private final int x, y;
    private final TreeType type;

    public Tree(int x, int y, TreeType type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    public void draw() {
        type.draw(x, y);
    }
}

// 4. Клиентский код (Лес)
class Forest {
    private final List<Tree> trees = new ArrayList<>();

    public void plantTree(int x, int y, String name, String color, String texture) {
        TreeType type = TreeFactory.getTreeType(name, color, texture);
        trees.add(new Tree(x, y, type));
    }

    public void drawForest() {
        trees.forEach(Tree::draw);
    }
}

// 5. Использование
public class Demo {
    public static void main(String[] args) {
        Forest forest = new Forest();
        forest.plantTree(10, 20, "Сосна", "Зеленый", "Иголки");
        forest.plantTree(30, 40, "Дуб", "Коричневый", "Листья");
        forest.plantTree(50, 60, "Сосна", "Зеленый", "Иголки"); // Использует существующий тип
        forest.drawForest();
    }
}