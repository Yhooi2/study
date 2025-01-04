package myclass26XO;

public class FieldXO {
    char[][] field;
    int size = 3;
    int countToWin = size;

    void initField() {
        this.field = new char[size][size];

        for (int r = 0; r < size; r++) {
            for (int c = 0; c < size; c++) {
                this.field[r][c] = ' ';
            }
        }
        System.out.println("Field is initialized!");
        this.printField();
    }

    public void printField() {
        System.out.print("   ");
        for (int i = 1; i <= size; i++) {
            System.out.print(i + "  ");
        }
        System.out.println();
        for (int r = 0; r < size; r++) {
            System.out.print(r + 1 + " ");
            for (int c = 0; c < size; c++) {
                System.out.print("[" + this.field[r][c] + "]");
            }
            System.out.println();
        }
    }

    boolean isCellEmpty(int row, int col) {
        if (row > size || col > size || row < 0 || col < 0) {
            return false;
        }
        return this.field[row][col] == ' '; // проверяем ячейку на пустоту
    }

    void setSymbol(int row, int col, char val) {
        this.field[row][col] = val;
    }

    boolean isGameOver(char lastTurn) {
        for (int r = 0; r < this.size; r++) {
            for (int c = 0; c < this.size; c++) {
                if (checkCellRight(r, c, lastTurn)) {
                    return true;
                }
                if (checkCellDown(r, c, lastTurn)) {
                    return true;
                }
                if (checkCellDiagonalLeftUp(r, c, lastTurn)) {
                    return true;
                }
                if (checkCellDiagonalRightUp(r, c, lastTurn)) {
                    return true;
                }
            }
        }
        return false;
    }
    boolean checkCellDown(int row, int col, char lastTurn) {
        if (row > this.size - this.countToWin) { // если строка больше чем размер поля минус количество победных символов
            return false;
        }  // то выходим из функции и возвращаем false(не проиграл)}
        // иначе начинаем цикл по строкам
        for (int i = row; i < row + this.countToWin; i++) { // цикл от текущей строки до количества победных символов
            if (this.field[i][col] != lastTurn) {// если символ не равен последнему ходу
                return false;// прерываем цикл и возвращаем false(не проиграл)
            }
        }
        return true;
    }
    boolean checkCellDiagonalRightUp(int row, int col, char lastTurn) {
        if ((row > this.size - this.countToWin && col < this.countToWin) ||
                (row < this.countToWin && col > this.size - this.countToWin)) {
            return false;
        }
        for (int i = row; i < this.countToWin; i++) {
            if (this.field[row +i][col +i] != lastTurn) {
                return false;
            }
        }
        return true;
    }
    boolean checkCellDiagonalLeftUp(int row, int col, char lastTurn) {
        if ((row > this.size - this.countToWin || col < this.countToWin - 1)) {
            return false;
        }
        for (int i = row; i < this.countToWin; i++) {
            if (this.field[row + i][col - i] != lastTurn) {
                return false;
            }
        }
        return true;
    }

        boolean checkCellRight(int row, int col, char lastTurn) {
        if (col > this.size - this.countToWin) { // если колонка больше чем размер поля минус количество победных символов
            return false;
        }  // то выходим из функции и возвращаем false(не проиграл)}
        // иначе начинаем цикл по строкам
        for (int i = 0; i < col + this.countToWin; i++) { // цикл от текущего столбца до количества победных символов
            if (this.field[row][i] != lastTurn) {// если символ не равен последнему ходу
                return false;// прерываем цикл и возвращаем false(не проиграл)
            }
        }
        return true;
    }
}