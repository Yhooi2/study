import java.util.List;
import java.util.ArrayList;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class MyClassCallable {
    private static final long COUNT = 2_000_000_000L;
    private static long sum;

    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(10);
        List<Future<Long>> results = new ArrayList<>();
        long startTime = System.currentTimeMillis();
        long part = COUNT / 10;
        results.add(executor.submit(new PartialSum(1, part)));

        for (int i = 1; i < 10; i++) {
            long start = i * part + 1;
            long end = (start + part) - 1;

            results.add(executor.submit(new PartialSum(start, end)));
        }

        try {
            for(Future<Long> future : results){
                sum += future.get();
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
        executor.shutdown();
        System.out.println("Result: " + sum);
        System.out.println("Time taken: " + (System.currentTimeMillis() - startTime));
    }
}

class PartialSum implements Callable<Long> {
long start;
long end;
long sum;

    public PartialSum(long start, long end) {
            this.start = start; this.end = end;
            this.sum = 0;
        }

    @Override
    public Long call() {
        long result = 0;
        for (int i = (int) start; i < (end); i++) {
            result += i;
        }
        return result;
    }

}