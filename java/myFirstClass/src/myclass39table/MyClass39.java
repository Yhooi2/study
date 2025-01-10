package myclass39table;

public class MyClass39 {
    public static void main(String[] args) {
        TableScanner tableScanner = new TableScanner();
        System.out.println("Please enter table: ");
        Row[] table = tableScanner.scanTable();
        // TableWriter tableWriter = new ConsoleTableWriter();
        // TableWriter tableWriter = new TextFileTableWriter("output");
        // TableWriter tableWriter = new CsvTableWriter("output");
        TableWriter tableWriter = new HtmlTableWriter("output");
        tableWriter.printTableHeaderToConsole(table);
        tableWriter.writeTable(table);
        System.out.println("Table written to " + tableWriter.getOutputPath());
    }
}
