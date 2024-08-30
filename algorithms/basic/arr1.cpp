#include <iostream>
#include <chrono>

using namespace std;

const int N = 1000;
int arr[N][N];
int main() {
	
	auto start = chrono::steady_clock::now();

	for (int i = 0; i < N; ++i) {
		for (int j = 0; j < N; ++j) {
			arr[i][j]++;
		}
	}
	auto end = chrono:: steady_clock:: now();
	cout << (int)chrono::duration<double, milli>(end - start).count() <<" ms";

}
