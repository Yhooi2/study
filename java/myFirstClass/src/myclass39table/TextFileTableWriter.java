package myclass39table;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class TextFileTableWriter implements  TableWriter {
    String fileName;
    TextFileTableWriter(String fileName){
        this.fileName = fileName + ".txt";
    }

    @Override
    public void writeTable(Row[] table) {
        try {
            FileWriter fileWriter = new FileWriter(this.fileName);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);

            int max = 0;
            for (Row value : table) {
                if (value.left.length() > max) {
                    max = value.left.length();
                }
            }
            for (Row row : table) {
                bufferedWriter.write(row.left + " ".repeat(max - row.left.length()) + "\t\t" + "|" + "\t\t" + row.right);
                bufferedWriter.write("\n");
            }
            bufferedWriter.write("\n");
            bufferedWriter.close(); // закрываем поток записи в файл

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public String getOutputPath() {
        return "text file: " + this.fileName;
    }
}
