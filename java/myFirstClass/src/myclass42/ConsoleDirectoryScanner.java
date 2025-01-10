package myclass42;

import java.io.File;

public class ConsoleDirectoryScanner implements DirectoryScanner {
    @Override
    public void printDirectoruFiles(File[] files) {
        for (int i = 0; i < files.length; i++){
            System.out.println(files[i].getName());
        }
    }
}
