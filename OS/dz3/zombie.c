#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>

int main() {
    pid_t pid;
    pid = fork();
    if (pid) {
        while(1);
    } else if (pid = 0) {
        exit(0);
    }
    return 0;
}


