package myclass30;

public class myclass34 {
    public static void main(String[] args) {
        m1();
    }
    static void m1() {
        m2();
    }
    static void m2() {
        m3();
    }
    static void m3() {
        m4();
    }
    static void m4() {
        m5();
    }
    static void m5() {
        m6();
    }
    static void m6() {
        m7();
    }
    static void m7() {
        StackTraceElement[] ste = Thread.currentThread().getStackTrace();
        for (int i=0; i < ste.length; i++) {
            System.out.println(i + " - " + ste[i]);
        }


    }
    static void m8() {
    }
}
