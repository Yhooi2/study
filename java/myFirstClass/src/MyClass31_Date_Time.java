import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;
import java.util.Date;

public class MyClass31_Date_Time {
    public static void main(String[] args) {
        LocalDateTime ldt = LocalDateTime.now();
        ZoneId zone = ZoneId.of("Europe/Moscow");
        ZonedDateTime zdt = ZonedDateTime.of(ldt, zone);
        System.out.println(zdt);
        System.out.println(ZonedDateTime.now(zone));
        zone = ZoneId.of("Asia/Tokyo");
        ZonedDateTime tokio = zdt.withZoneSameInstant(zone);
        System.out.println(tokio);



        System.out.println(System.currentTimeMillis()); // unix timestamp 1 january 1970

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        System.out.println(formatter.format(LocalDate.now()));




        LocalDate date = LocalDate.now(); // static constructor
        System.out.println(date);

        // constructors
        LocalDate date3 = LocalDate.of(2020, 1, 1); // static method
        LocalDate date2 = LocalDate.parse("2020-01-01");

        // getters
        System.out.println(date.getDayOfMonth());
        System.out.println(date.getDayOfWeek());
        System.out.println(date.getDayOfYear());
        System.out.println(date.getMonth());
        System.out.println(date.getMonthValue());
        System.out.println(date.getYear());
        System.out.println(date.isLeapYear());
        System.out.println(date.lengthOfMonth()); // number of days in the month
        System.out.println(date.lengthOfYear()); // number of days in the year

        // setters
        System.out.println(date.plusDays(-8).isLeapYear());
        System.out.println(date.minusWeeks(1));
        System.out.println(date.plusMonths(1));
        System.out.println(date.minusMonths(1));
        System.out.println(date.plusYears(1));
        System.out.println(date.minusYears(1));


        // comparison
        System.out.println(date.withYear(2020).compareTo(date)); // returns 1 if this > other, -1 otherwise
        System.out.println(date.minusDays(8).isBefore(date));
        System.out.println(date.plusWeeks(1).isAfter(date));
        System.out.println("first month " + date.withDayOfMonth(1).isEqual(date.withDayOfYear(1)));


        // methods
        System.out.println(date.withYear(2020));
        System.out.println(date.withMonth(2));
        System.out.println(date.with(TemporalAdjusters.firstDayOfMonth()));
        System.out.println(date.withMonth(2).with(TemporalAdjusters.lastDayOfMonth()));
        System.out.println(date.with(TemporalAdjusters.firstDayOfNextYear()));
        System.out.println(date.with(TemporalAdjusters.firstDayOfYear()));
        System.out.println(date.with(TemporalAdjusters.lastDayOfYear()));
        System.out.println(date.with(TemporalAdjusters.next(DayOfWeek.MONDAY)));
        System.out.println(date.with(TemporalAdjusters.previous(DayOfWeek.SUNDAY)));
        System.out.println(date.with(TemporalAdjusters.dayOfWeekInMonth(1, DayOfWeek.FRIDAY)));


        // formatting;
        System.out.println(date.format(java.time.format.DateTimeFormatter.ISO_DATE));
        System.out.println(date.format(java.time.format.DateTimeFormatter.BASIC_ISO_DATE));


        // getters
        LocalTime time = LocalTime.now();
        System.out.println(time);
        System.out.println(time.getHour());
        System.out.println(time.getMinute());
        System.out.println(time.getSecond());
        System.out.println(time.getNano());


        // setters
        System.out.println(time.plusHours(1));
        System.out.println(time.plusMinutes(1));
        System.out.println(time.plusSeconds(1));
        System.out.println(time.plusNanos(1));



        // comparison
        System.out.println(time.compareTo(LocalTime.now())); // returns 1 if this > other, -1 otherwise
        System.out.println(time.isBefore(LocalTime.now()));
        System.out.println(time.isAfter(LocalTime.now()));

        // methods
        LocalTime time2 = LocalTime.of(1, 1, 1, 1); // static method
        System.out.println(time2);
        System.out.println(time2.withHour(1));
        System.out.println(time2.withMinute(1));
        System.out.println(time2.withSecond(1));
        System.out.println(time2.withNano(1));



        LocalDateTime dateTime = LocalDateTime.of(date,time);
        System.out.println(dateTime);

        // все методы как у LocalDate и LocalTime

    }
}
