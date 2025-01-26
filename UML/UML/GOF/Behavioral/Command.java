import java.util.*;

// 1. Receiver
class Light {
    private boolean isOn = false;

    public boolean isOn() {
        return isOn;
    }

    public void toggle() {
        isOn = !isOn;
        System.out.println("Свет " + (isOn ? "включен" : "выключен"));
    }
}

// 2. Command Interface
interface Command {
    void execute();
    void undo();
}

// 3. ConcreteCommand (с сохранением состояния)
class ToggleLightCommand implements Command {
    private Light light;
    private boolean prevState;

    public ToggleLightCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        prevState = light.isOn();
        light.toggle();
    }

    @Override
    public void undo() {
        if (light.isOn() != prevState) {
            light.toggle();
        }
    }
}

// 4. Инвокер с очередью и историей
class Invoker {
    private Stack<Command> executedCommands = new Stack<>();
    private Stack<Command> undoneCommands = new Stack<>();
    private Queue<Command> commandQueue = new LinkedList<>();

    public void addToQueue(Command cmd) {
        commandQueue.add(cmd);
    }

    public void executeCommands() {
        while (!commandQueue.isEmpty()) {
            Command cmd = commandQueue.poll();
            cmd.execute();
            executedCommands.push(cmd);
            undoneCommands.clear(); // Сброс стека повтора при новых командах
        }
    }

    public void undo() {
        if (!executedCommands.isEmpty()) {
            Command cmd = executedCommands.pop();
            cmd.undo();
            undoneCommands.push(cmd);
        }
    }

    public void redo() {
        if (!undoneCommands.isEmpty()) {
            Command cmd = undoneCommands.pop();
            cmd.execute();
            executedCommands.push(cmd);
        }
    }
}

// 5. Клиентский код
public class Client {
    public static void main(String[] args) {
        Light light = new Light();
        Invoker invoker = new Invoker();
        invoker.addToQueue(new ToggleLightCommand(light)); // Вкл
        invoker.addToQueue(new ToggleLightCommand(light)); // Выкл
        invoker.executeCommands();
        invoker.undo(); // Свет включен
        invoker.redo(); // Свет выключен
    }
}