#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

#define SIZE 2 // size matrix

void multiply(int m1[SIZE][SIZE], int m2[SIZE][SIZE],int pipefd) {
    int row; // Number string for math one proc
    read(pipefd, &row, sizeof(int)); // Number string from pipe
 // Sum product's row m1 and col m2
    for (int col = 0; col < SIZE; col++) {
        int resultMatrixValue = 0;
        for (int i = 0; i < SIZE; i++) {
	    resultMatrixValue += m1[row][i] * m2[i][col];
        }
	write(pipefd, &resultMatrixValue, sizeof(int));
    }
}

// Input elements result matrix's
void output_matrix(int resultMatrix[SIZE][SIZE]) {
    printf("Matrix:\n");
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
	    printf("%d ", resultMatrix[i][j]); 
	}
	printf("\n");
    }
}

int main() {
    int m1[SIZE][SIZE] = {{1, 2}, {3, 4}};
    int m2[SIZE][SIZE] = {{5, 6}, {7, 8}};
    int resultMatrix[SIZE][SIZE];
    pid_t pids[SIZE];// storage process IDs
    int status[SIZE];// storage status process off
    int pipes[SIZE][2];// storage pipe IDs r and w

    for (int i = 0; i < SIZE; i++) {
        pipe(pipes[i]);
    }

    for (int i = 0; i < SIZE; i++) {
        pids[i] = fork();// create new proc for every row
        if (pids[i] < 0) {
	    printf("Error! don't criate process");
	    break;
	}
	if (pids[i] == 0) {// for sun
	    close(pipes[i][0]);// close read pipe for sun
	    for (int j = 0; j < SIZE; j++) {
	        if (j != i) {
		   close(pipes[j][0]);
		   close(pipes[j][1]);
		}
            }
	    multiply(m1, m2, pipes[i][1]);
	    exit(0);
        }
    }
    for (int i = 0; i < SIZE; i++) {
        waitpid(pids[i], &status[i], 0);
    }
    for (int i = 0; i < SIZE; i++) {
        close(pipes[i][1]);
        for (int j = 0; j < SIZE; j++) {
            int resultMatrixValue;
        	read(pipes[i][0], &resultMatrixValue, sizeof(int));
	        resultMatrix[i][j] = resultMatrixValue;
        }
    }
    output_matrix(resultMatrix);
    return 0;
}
