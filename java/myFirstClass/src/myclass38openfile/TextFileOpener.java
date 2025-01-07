package myclass38openfile;

import java.io.*;
import java.util.Scanner;

public class TextFileOpener extends FileOpener {

    TextFileOpener(File file) {
        super(file);
    }

    @Override
    public void open() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Read text from file to console? (y/n): ");
        String answer = sc.next();
        if(answer.equals("y")) {
            try (FileReader fileReader = new FileReader(this.file)){
                BufferedReader reader = new BufferedReader(fileReader);
                String next = reader.readLine();
                while(next != null){
                    System.out.println(next);
                    next = reader.readLine();
                }

            } catch (IOException e) {
                throw new RuntimeException("Error reading file",e);
            }
        } else super.open();
    }
}
