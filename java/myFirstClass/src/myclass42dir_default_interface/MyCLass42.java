package myclass42dir_default_interface;

public class MyCLass42 {
    public static void main(String[] args) {
        DirectoryScanner directoryScanner = new ConsoleDirectoryOnlyFilesScanner();
//        File[] files =directoryScanner.getDirectoryFiles("/Users/art/code/study/java/myFirstClass/src");
//        directoryScanner.printDirectoruFiles(files);

        directoryScanner.readAndPrint("/Users/art/code/study/java/myFirstClass/src");
    }
}

