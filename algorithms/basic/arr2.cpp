#include <iostream>
#include <chrono>

const int N = 1000;
int arr[N][N];
using namespace std;

int main() {
	
	auto start = chrono::steady_clock::now();

	for (int i = 0; i < N; ++i) {
		for (int j = 0; j < N; ++j) {
			arr[j][i]++;
		}
	}
	auto end = chrono:: steady_clock:: now();
	cout << (int)chrono::duration<double, milli>(end - start).count() <<" ms";

}
