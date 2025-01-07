package myclass39table;

import java.util.Scanner;

public class TableScanner {
    Row[] scanTable() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("please enter header left column");
        String leftHeader = scanner.nextLine();
        System.out.println("please enter header right column");
        String rightHeader = scanner.nextLine();
        Row header = new Row(leftHeader,rightHeader);

        System.out.println("please enter number of rows");
        int rowCount = Integer.parseInt(scanner.nextLine()) + 1;

        Row[] table = new Row[rowCount];
        table[0] = header;
        for (int i = 1; i < rowCount; i++) {
            System.out.println("Enter " + i + " row: ");
            System.out.println("Left: ");
            leftHeader = scanner.next();
            System.out.println("Right: ");
            rightHeader = scanner.next();

            Row row = new Row(leftHeader, rightHeader);
            table[i] = row;
        }

        return table;
    }
}
