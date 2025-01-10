package myclass42;

import java.io.File;

public class ConsoleDirectoryOnlyFilesScanner implements DirectoryScanner {
    @Override
    public void printDirectoruFiles(File[] files) {
        for (int i=0; i<files.length; i++){
            System.out.println(files[i].getName());
            }
    }
    @Override
    public File[] getDirectoryFiles(String path) {
        File dir = new File(path);
        File [] files = dir.listFiles();
        int filesCount = 0;
        for (int i=0; i<files.length; i++) {
            if (!files[i].isDirectory()) {
                filesCount++;
            }
        }
        File [] onlyFiles = new File[filesCount];
        int lastIndex = 0;

        for (int i=0; i<files.length; i++) {
            if (!files[i].isDirectory()) {
                onlyFiles[lastIndex] = files[i];
                lastIndex++;
            }
        }
        return onlyFiles;
    }
}
