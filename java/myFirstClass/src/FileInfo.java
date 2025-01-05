import java.io.File;

public class FileInfo {
    String fileName;
    String path;
    long size;

    public FileInfo(String fileName, String path, long size) {
        this.fileName = fileName;
        this.path = path;
        this.size = size;
    }
    public FileInfo(File file) {
        this.path = file.getAbsolutePath();
        this.fileName = file.getName();
        this.size = file.length();
    }
    public FileInfo() {}

}
