import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Class14_BufferedReader_FileReader {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader("files/book.txt"));
        String[] part = new String[100];
        for (int  i = 0; i < 100; i++){
           part[i] = reader.readLine();
        }
        for (int i = 30; i > 20; i--){
            System.out.println(part[i]);
        }
        reader.close();
    }

}
