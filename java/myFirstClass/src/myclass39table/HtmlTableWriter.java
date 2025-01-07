package myclass39table;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class HtmlTableWriter implements  TableWriter {
    String fileName;
    HtmlTableWriter(String fileName){
        this.fileName = fileName + ".html";
    }

    @Override
    public void writeTable(Row[] table) {
        try {
            FileWriter fileWriter = new FileWriter(this.fileName);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
            bufferedWriter.write("<html>\n<head><title>");
            bufferedWriter.write(table[0].left + "-" + table[0].right);
            bufferedWriter.write("</title></head>\n<body>\n<table border=\"1\">\n");
            bufferedWriter.write("<tr><th>" + table[0].left + "</th>"
                    + "<th>" + table[0].right + "</th></tr>");
            for (int i = 1; i < table.length; i++) {
                bufferedWriter.write("<tr><td>" + table[i].left
                        + "</td><td>" + table[i].right + "</td></tr>");
            }
            bufferedWriter.write("</table>\n</body>\n</html>");

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
