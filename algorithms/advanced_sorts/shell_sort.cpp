#include<ctime>
#include<iostream>
#include<cstdlib>
#include<cmath>

int SIZE = 500000;

int main() {
    
    time_t start = clock();

    int arr[SIZE] = {};

    for (int i = 0; i < SIZE; i++) {
        arr[i] = rand() % 10;
    }

    int step;
    int n = SIZE;
    while (n != 1) {
        n = n / 2;
	for (int i = n; i < SIZE; ++i) {
	    step = i - n;
            if (arr[step] > arr[i]) {
		std::swap(arr[i], arr[step]);
		for (int j = step - n; j > -1; j -=n) {
	            if (arr[j] > arr[step]) {
			    std::swap(arr[j], arr[step]);
			    step = j;
	            } else break;
		}
	    }
	}
    }


    time_t finish = clock();

    double duration = (double)(finish - start)/ CLOCKS_PER_SEC;
    std::cout << std::endl << round(duration*10000)/10000<< std::endl; 
}
