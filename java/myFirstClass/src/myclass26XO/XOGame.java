package myclass26XO;

import java.util.Scanner;

public class XOGame {
    FieldXO gameField;
    Scanner scanner = new Scanner(System.in);
    char currentPlayer;
    boolean gameOver = false;

    void setupNewGame() {
        System.out.println("Will play new ");
        this.gameField = new FieldXO();
        this.gameField.initField();
    }

    void play() {
        this.setupNewGame();
        System.out.println("Who will make first turn? (x/o)");
        char first = this.scanner.next().charAt(0);
        if (first == 'x' || first == 'o') {
            this.currentPlayer = first;
        } else {
            System.out.println("Wrong input! So first will be x");
            this.currentPlayer = 'x';
        }
        while (true) {
            turn();
            if (this.gameField.isGameOver(this.currentPlayer)) {
                break;
            }
            if (this.currentPlayer == 'x') {
                this.currentPlayer = 'o';
            } else {
                this.currentPlayer = 'x';
            }
        }
        System.out.println("Game over! " + this.currentPlayer + " won!");
    }
    void turn() {
        System.out.println(this.currentPlayer + ", your turn. ");
        System.out.print("Enter coordinates: ");
        System.out.print("row: ");
        int row = this.scanner.nextInt() - 1;
        System.out.print("col: ");
        int col = this.scanner.nextInt() - 1;
        if (!this.gameField.isCellEmpty(row, col)) {
            System.out.println("Wrong coordinates, mb this cell is not free? Turn again");
            this.turn();
        } else {
            this.gameField.setSymbol(row, col, this.currentPlayer);
            this.gameField.printField();
        }
    }

}
