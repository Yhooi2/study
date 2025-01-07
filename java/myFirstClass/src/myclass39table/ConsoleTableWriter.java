package myclass39table;

public class ConsoleTableWriter implements  TableWriter {

    @Override
    public void writeTable(Row[] table) {
        int max = 0;
        for (Row value : table) {
            if (value.left.length() > max) {
                max = value.left.length();
            }
        }
        for (Row row : table) {
            System.out.println(row.left + " ".repeat(max - row.left.length()) + "\t\t" + "|" + "\t\t" + row.right);
        }
        System.out.println();
    }

    @Override
    public String getOutputPath() {
        return "console";
    }
}
