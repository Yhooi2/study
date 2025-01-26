interface ChatMediator {
    void sendMessage(String message, User user);
    void addUser(User user);
}

class ChatRoom implements ChatMediator {
    private List<User> users = new ArrayList<>();

    @Override
    public void sendMessage(String message, User sender) {
        for (User user : users) {
            if (user != sender) {
                user.receiveMessage(message);
            }
        }
    }

    @Override
    public void addUser(User user) {
        users.add(user);
    }
}

class User {
    private String name;
    private ChatMediator mediator;

    public User(String name, ChatMediator mediator) {
        this.name = name;
        this.mediator = mediator;
        mediator.addUser(this);
    }

    public void sendMessage(String message) {
        System.out.println(name + " отправил: " + message);
        mediator.sendMessage(message, this);
    }

    public void receiveMessage(String message) {
        System.out.println(name + " получил: " + message);
    }
}

// 4. Клиентский код
public class MediatorDemo {
    public static void main(String[] args) {
        ChatMediator chat = new ChatRoom();

        User alice = new User("Alice", chat);
        User bob = new User("Bob", chat);
        User charlie = new User("Charlie", chat);

        alice.sendMessage("Привет всем!");
        bob.sendMessage("Как дела?");
    }
}