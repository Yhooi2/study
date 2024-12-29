import java.io.File;
import java.io.IOException;

public class Class11_Create_file {
    public static void main(String[] args) throws IOException {
        int n = 0;
        while (n < 1000) {
            File file = new File("files/" + n);
            file.createNewFile();
            n++;
        }
    }
}
