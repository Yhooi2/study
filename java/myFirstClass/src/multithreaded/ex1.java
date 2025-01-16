package multithreaded;

public class ex1 {
    static int counter = 0;

    public static synchronized void increment() {++counter;}

    public static void main(String[] args) throws InterruptedException{

        Thread t1 = new Thread(new runner());
        Thread t2 = new Thread(new runner());
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println(counter);

    }


}

class runner implements Runnable {

    @Override
    public void run() {
        for (int i = 0; i < 10000; i++) {
            ex1.increment();
        }
    }
}