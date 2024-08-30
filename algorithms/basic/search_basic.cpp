#include <iostream>

int main() {
	int arr[11];
	for (int i = 0; i < 10; ++i) {
		arr[i] = i;
	}
	int x = 7;
	bool have = 0;
	for (int i = 0; i < 10; ++i) {
		if (arr[i] == x) { have = 1; break; }
	}	
	have = 0;
	arr[10] = x;
	int i;
	for (i = 0; arr[i] != x; ++i);
	have = i < 10;
}
