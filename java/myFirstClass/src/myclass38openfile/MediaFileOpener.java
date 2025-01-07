package myclass38openfile;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class MediaFileOpener extends  FileOpener {
    MediaFileOpener(File file) {
        super(file);
    }

    @Override
    public void open() {
        System.out.println("Open media file. Do you want to play it? (y/n)?");
        Scanner scanner = new Scanner(System.in);
        char answer = scanner.next().charAt(0);
        if(answer == 'y') {
            super.open();
        }
    }
}
