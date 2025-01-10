package myclass39table;

public interface TableWriter {
    void writeTable(Row[] table);

    String getOutputPath();

    default void printTableHeaderToConsole(Row[] table) {
        System.out.println("Whill print table with columns " + table[0].left + " and " + table[0].right);
    }

}
