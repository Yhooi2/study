import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

public class Time {
    public static void main(String[] args) {
        ArrayList arrayList = new ArrayList();
        LinkedList linkedList = new LinkedList();
        long count = 1000000;
        System.out.println("ArrayList: " + getTime(arrayList, count));
        System.out.println("LinkedList: " + getTime(linkedList, count));
    }

    public static long getTime(List list, long count) {
        Date dateStart = new Date();
        insertEnd(list, count);
        Date dateEnd = new Date();
        return dateEnd.getTime() - dateStart.getTime();
    }

    public static void insertStart(List list,long count) {
        for (int i = 0; i < count; i++) {
            list.add(0, new Object());
        }
    }
    public static void insertEnd(List list,long count){
        for(int i=0;i<count;i++){
            list.add(new Object());
        }
    }
}
