interface EuropeanSocket {
    void plugIn();
}

class AmericanPlug {
    public void plugIntoAmericanSocket() {
        System.out.println("Подключено к американской розетке 110В");
    }
}

class EuroToAmericanAdapter implements EuropeanSocket {
    private AmericanPlug americanPlug;

    public EuroToAmericanAdapter(AmericanPlug plug) {
        this.americanPlug = plug;
    }

    @Override
    public void plugIn() {
        System.out.println("Адаптер преобразует 220В → 110В");
        americanPlug.plugIntoAmericanSocket();
    }
}

public class Client {
    public static void main(String[] args) {
        AmericanPlug americanPlug = new AmericanPlug();
        EuropeanSocket adapter = new EuroToAmericanAdapter(americanPlug);

        adapter.plugIn();
    }
}