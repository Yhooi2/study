#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>
#include <ctype.h>

void readMatrix(int* matrix, int size) {
    
    printf("Enter matrix (%dx%d):\n", size, size);
    for (int i = 0; i < size; i++) {
	for (int j = 0; j < size; j++) {
        scanf("%d", matrix + i * size + j);
	}
    }
}

int main() {

    int size;
    printf("Enter size of square matrices: ");
    scanf("%d", &size);

    int matrix1[size][size];
    int matrix2[size][size]; 
    int resultMatrix[size][size];

    //input matrixs
    readMatrix(&matrix1[0][0], size);
    readMatrix(&matrix2[0][0], size);
    // Create pipes
    int pipes[size][2];
    for (int i = 0; i < size; i++) {
        if (pipe(pipes[i]) == -1) {
	    perror("pipe");
	    return 1;
	}
    }
    pid_t pids[size];// array for suns
    // Create forks
    for (int i = 0; i < size; i++) {
        int pid = fork();
	if (pid == 0) {

	    close(pipes[i][0]);// closse read end pipe

	    int sum; 
	    for (int col = 0; col < size; col++) {
                sum = 0;
		for ( int k = 0; k < size; k++) {
                    sum += matrix1[i][k] * matrix2[k][col];
		}
                write(pipes[i][1], &sum, sizeof(int));
	   }
	   close(pipes[i][1]);// clise wride end pipe
	   return 0;
	} else if (pid > 0) {
	    pids[i] = pid;
	} else if (pid < 0) {
	    perror("fork");
	    return 1;
	}
    }
    for (int i = 0; i < size; i++) {
        waitpid(pids[i], NULL, 0);
    }
    //read and print result

    for (int i = 0; i < size; i++) {
        close(pipes[i][1]);
        for (int col = 0; col < size; col++) {
                read(pipes[i][0], &resultMatrix[i][col], sizeof(int));
	}
	close(pipes[i][0]);
    }
    printf("Result Matrix:\n");
    for (int i = 0; i < size; i++) {
       for (int j = 0; j < size; j++) {
	    printf("%d ", resultMatrix[i][j]);
       }
       printf("\n");
    }
    return 0;
}
