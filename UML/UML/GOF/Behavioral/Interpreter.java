interface Expression {
    int interpret();
}

class NumberExpression implements Expression {
    private final int value;

    public NumberExpression(int value) {
        this.value = value;
    }

    @Override
    public int interpret() {
        return value;
    }
}

class AddExpression implements Expression {
    private final Expression left;
    private final Expression right;

    public AddExpression(Expression left, Expression right) {
        this.left = left;
        this.right = right;
    }

    @Override
    public int interpret() {
        return left.interpret() + right.interpret();
    }
}

// 4. Клиентский код
public class Client {
    public static void main(String[] args) {
        Expression expr = new AddExpression(
                new NumberExpression(10),
                new NumberExpression(5)
        );

        System.out.println(expr.interpret()); // 15
    }
}