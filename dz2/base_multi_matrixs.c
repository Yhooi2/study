#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

#define SIZE 4 

int main() {
    
    int matrix1[SIZE][SIZE] = {
	    {1, 2, 3, 4}, 
	    {5, 6, 7, 8},
            {9, 0, 1, 2},
	    {3, 4, 5, 6}
    };
    int matrix2[SIZE][SIZE] = { 
	    {1, 2, 3, 4}, 
	    {5, 6, 7, 8},
            {9, 0, 1, 2},
	    {3, 4, 5, 6}
    };
    int resultMatrix[SIZE][SIZE];

    // Create pipes
    int fd[SIZE][2];
    for (int i = 0; i < SIZE; i++) {
        if (pipe(fd[i]) == -1) {
	    perror("pipe");
	    return 1;
	}
    }
    pid_t pids[SIZE];// array for suns
    // Create forks
    for (int i = 0; i < SIZE; i++) {
        int pid = fork();
	if (pid = 0) {
           int startRow = i / 2;
	   int startCol = i % 2;

	   close(fd[i][0]);// closse read end pipe
	   
	   for (int row = startRow; row < SIZE; row +=2) {
	       for (int col = startCol; col < SIZE; col +=2) {
		   int sum = 0;
		   for ( int k = 0; k < SIZE; k++) {
			sum += matrix1[row][k] * matrix2[k][col];
		   }
		   resultMatrix[row][col] = sum;
		   write(fd[i][1], &resultMatrix[row][col],sizeof(int));
	       }
	   }
	   close(fd[i][1]);// clise wride end pipe
	   return 0;
	} else if (pid > 0) {
	    pids[i] = pid;
	} else if (pid < 0) {
	    perror("fork");
	    return 1;
	}
    }
    for (int i = 0; i < SIZE; i++) {
        waitpid(pids[i], NULL, 0);
    }
    //print result
    printf("Result Matrix:\n");
    
    for (int i = 0; i < SIZE; i++) {
        close(fd[i][1]);

        int startRow = i / 2;
        int startCol = i % 2;
	
        for (int row = startRow; row < SIZE; row += 2) {
            for (int col = startCol; col < SIZE; col += 2) {
                read(fd[i][0], &resultMatrix[row][col], sizeof(int));
		printf("%d ", resultMatrix[row][col]);
	    }
	    printf("\n");
	}
	close(fd[i][0]);
    }
    return 0;
}
