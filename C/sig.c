#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

void term_handler(int i) {
    printf("Terminating\n");
    exit(EXIT_SUCCESS);
}

int main (int argc, char ** argv) {
    struct sigaction sa; // Содержит данные об операции выполняемой над обр. сигн
    sigset_t newset;
    sigemptyset(&newset);
    sigaddset(&newset, SIGHUP);
    sigprocmask(SIG_BLOCK, &newset, 0);
    //sa.sa_mask - маска сигналов, блокируемых на время  вызова обрвботчика
    //sa.sa_flags - доп флагм
    sa.sa_handler = term_handler;//Указатель на функцию обратчика сигнала или константа
    sigaction(SIGTERM, &sa, 0); // Установка и удаление обр. сигналов
    printf("My pid is %i\n", getpid());
    printf("Waiting...\n");
    while(1) sleep(1);
    return EXIT_FAILURE;
}
