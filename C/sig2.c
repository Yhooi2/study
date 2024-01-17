#include <stdio.h>
#include <signal.h>
#include <unistd.h> // sleep

void mysig_handler(int signalno) {
    printf("Called with %d\n",signalno);
}

int main() {
    
    int c = 0;
    signal (SIGINT, mysig_handler);
    while(1) {
        printf("Hello %d\n", c++);
	sleep(1);
    }
    return 0;
}
