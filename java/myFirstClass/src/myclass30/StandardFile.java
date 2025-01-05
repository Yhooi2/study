package myclass30;

import java.io.File;

public class StandardFile {
    File file;
    String fileName;

    StandardFile(File file) {
        this.file = file;
        this.fileName = file.getName();
    }
    // StandardFile() {}

    String getInfo() {
        return this.fileName + ":" + this.file;
    }

}
