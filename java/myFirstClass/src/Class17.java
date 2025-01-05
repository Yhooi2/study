import java.io.File;

public class Class17 {
    public static void main(String[] args) {
//        Class16_String str = new Class16_String();
//        String str1 = "comand";
//        File file = new File("files/text.txt");
//        String path = file.getAbsolutePath();
//        String name = file.getName();
//        long size = file.length();
//
//        FileInfo fileInfo = new FileInfo();
//        fileInfo.fileName = name;
//        fileInfo.path = path;
//        fileInfo.size = size;
        File dir = new File("files");
        File[] files = dir.listFiles();
        int size = files.length;
        FileInfo[] fileInfos = new FileInfo[size];

        for (int i = 0; i < size; i++) {
            FileInfo info = new FileInfo(files[i]);
            fileInfos[i] = info;
        }
        for (int i = 0; i < size; i++) {
            FileInfo info = fileInfos[i];
            System.out.println(i + " " + info.fileName + " " + info.path + " " + info.size);
        }
    }
}
