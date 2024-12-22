import java.io.*;
import java.net.URL;
import java.net.URLConnection;

public class lesson2 {
    public static void main(String[] args) throws IOException {
        String sourceCode = downloadWebPage();
        writeToFile(sourceCode.replaceAll("Найдётся", "Input"));
    }

    private static String downloadWebPage() throws IOException {
        StringBuilder result = new StringBuilder();
        String line;
        URLConnection urlConnection = new URL("https://ya.ru").openConnection();

        try (InputStream is = urlConnection.getInputStream();
             BufferedReader br = new BufferedReader(new InputStreamReader(is))) {

            while ((line = br.readLine()) != null) {
                result.append(line);
            }
            return result.toString();
        }
    }

    public static void writeToFile(String str) throws IOException {
        BufferedWriter writer = new BufferedWriter(new FileWriter("./output.html"));
        writer.write(str);
        writer.close();
    }
}
