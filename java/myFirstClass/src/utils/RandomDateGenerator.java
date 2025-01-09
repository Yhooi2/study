package utils;

import java.time.LocalDate;
import java.util.Random;

public class RandomDateGenerator {
    public LocalDate getRandomDate(int startYear, int endYear) {
        int randomYearDelta = new Random().nextInt(endYear - startYear + 1);
        int randomYear= startYear +randomYearDelta;
        int randomMonth = new Random().nextInt(12) + 1;
        int maxDay = (randomMonth == 2)? 28 : ((randomMonth % 2==0 && randomMonth <7) ||
                ((randomMonth % 2 != 0) && randomMonth > 6)) ? 30 : 31;
        int randomDay = new Random().nextInt(maxDay) + 1;
        return LocalDate.of(randomYear, randomMonth, randomDay);
    }
}