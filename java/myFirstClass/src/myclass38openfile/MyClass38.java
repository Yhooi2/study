package myclass38openfile;

import javax.swing.*;
import java.io.File;
import java.util.Scanner;

public class MyClass38 {
    public static void main(String[] args) {
        JFileChooser jfc = new JFileChooser();
        jfc.showOpenDialog(null);
        File file = jfc.getSelectedFile();
        String name = file.getName();
        String ext = name.substring(name.length() - 3);
        FileOpener fileOpener = new FileOpener(file);
        if (ext.equals("txt") || ext.equals("log")) {
            fileOpener = new TextFileOpener(file);
        }
        else if (ext.equals("mp3") || ext.equals("mp4") || ext.equals("m4a")) {
            fileOpener = new MediaFileOpener(file);
        }
        execute(fileOpener);
    }

    public static void execute(FileOpener file) {
        file.printInfo();
        Scanner scanner = new Scanner(System.in);
        System.out.println("Do you want to open file? (y/n): ");
        if(scanner.next().equals("y")) {
            file.open();
        } else {
            System.out.println("You don't want to open this file");
        }
    }
}
