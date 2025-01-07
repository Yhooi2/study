package myclass39table;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class CsvTableWriter implements  TableWriter {
    String fileName;
    CsvTableWriter(String fileName){
        this.fileName = fileName + ".csv";
    }

    @Override
    public void writeTable(Row[] table) {
        try {
            FileWriter fileWriter = new FileWriter(this.fileName);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);

            for (Row row : table) {
                bufferedWriter.write(row.left + ";" + row.right + "\n");
            }
            bufferedWriter.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public String getOutputPath() {
        return "text file: " + this.fileName;
    }
}
