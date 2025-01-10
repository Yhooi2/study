package myclass42;

import  java.io.File;
public interface DirectoryScanner {
    void printDirectoruFiles(File[] files);

    default File[] getDirectoryFiles(String path) {
        File dir = new File(path);
        return dir.listFiles();
    }

    default void readAndPrint(String path) {
        File[] files = getDirectoryFiles(path);
        printDirectoruFiles(files);
    }

}
