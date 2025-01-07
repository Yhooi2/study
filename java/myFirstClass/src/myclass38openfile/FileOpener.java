package myclass38openfile;

import java.awt.*;
import java.io.File;
import java.io.IOException;

public class FileOpener {
    File file;

    FileOpener(File file) {
        this.file = file;
    }
    public void open() {
        Desktop desktop = Desktop.getDesktop();
        try {
            desktop.open(this.file);
        } catch (IOException e) {
            throw new RuntimeException("Error opening file ", e);
        }
    }

    public void printInfo() {
        System.out.println(file.getName());
        System.out.println(file.getAbsolutePath());
    }
}

