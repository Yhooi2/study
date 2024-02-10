#include<ctime>

time_t start = clock();
    class_one.function1();






 time_t finish = clock();

 double duration = (double)(finish - start)/ CLOCKS_PER_SEC;
 printf( "%2.1f seconds\n" duration );
