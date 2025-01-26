// 1. Интерфейс пациента
interface Patient {
    void accept(Doctor doctor);
}

// 2. Конкретные пациенты
class Human implements Patient {
    @Override
    public void accept(Doctor doctor) {
        doctor.visit(this); // "Доктор, осмотри меня!"
    }
}

class Cat implements Patient {
    @Override
    public void accept(Doctor doctor) {
        doctor.visit(this);
    }
}

class Dog implements Patient {
    @Override
    public void accept(Doctor doctor) {
        doctor.visit(this);
    }
}

// 3. Интерфейс доктора
interface Doctor {
    void visit(Human human);
    void visit(Cat cat);
    void visit(Dog dog);
}

// 4. Конкретный доктор (хирург)
class Surgeon implements Doctor {
    @Override
    public void visit(Human human) {
        System.out.println("Хирург делает операцию человеку");
    }

    @Override
    public void visit(Cat cat) {
        System.out.println("Хирург лечит кота");
    }

    @Override
    public void visit(Dog dog) {
        System.out.println("Хирург накладывает швы собаке");
    }
}

// 5. Клиентский код
public class Hospital {
    public static void main(String[] args) {
        Patient[] patients = {new Human(), new Cat(), new Dog()};
        Doctor surgeon = new Surgeon();

        for (Patient patient : patients) {
            patient.accept(surgeon);
        }
    }
}