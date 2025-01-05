package myclass30;

import java.io.File;

public class myClass30 {
    public static void main(String[] args) {
        File file = new File("TheTerminator.m4v");
        StandardFile sf = new StandardFile(file);
        File file2 = new File("text.txt");
        TextFile tf = new TextFile(file2);
        tf.linesCount = 100;
        printFile(sf);
        printFile(tf);
        sf = tf; // upcasting - приведение к родительскому классу but not tf = sf
        StandardFile sf1 = new TextFile(file2);
        System.out.println(sf1.getClass());
        if (sf instanceof TextFile) {
            TextFile tf1 = (TextFile)sf1; // downcasting - приведение к дочернему классу
            System.out.println(tf1.getClass());
        }
    }
    static void printFile(StandardFile sf){
        System.out.println("info: " + sf.getInfo());
    }
}
