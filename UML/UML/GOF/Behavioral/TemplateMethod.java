abstract class AbstractProcessor {
    public final void processDocument() {
        open();
        read();
        close();
    }

    protected void open() { // хук — можно переопределить, но не обязателен
        System.out.println("Открытие файла");
    }

    protected abstract void read();

    protected void close() {
        System.out.println("Закрытие файла");
    }
}

class PdfProcessor extends AbstractProcessor {

    @Override
    protected void read() {
        System.out.println("Чтение PDF через библиотеку X");
    }
}

class DocxProcessor extends AbstractProcessor {
    @Override
    protected void read() {
        System.out.println("Парсинг DOCX документа");
    }
}

// 3. Клиентский код
public class Client {
    public static void main(String[] args) {
        AbstractProcessor pdf = new PdfProcessor();
        pdf.processDocument();

        AbstractProcessor docx = new DocxProcessor();
        docx.processDocument();
    }
}