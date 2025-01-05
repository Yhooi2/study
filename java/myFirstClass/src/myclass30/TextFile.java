package myclass30;

import java.io.File;

public class TextFile extends StandardFile {
    int linesCount;

    TextFile(File file) {
        super(file);// 4 bytes per line
    }

}
