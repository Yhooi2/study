#include <iostream>
#include <vector>

using namespace std;

int main() {
	vector<int> v;
	int n = 1e7;
	int* x;
	for (int i = 0; i < n; ++i) {
		v.push_back(i); // Relocation reguraly
		if (i == 10) x = &v[i]; // Err when relocation change address memory cell
	}
	
	vector<int> v1;
	v1.reserve(n + 1); // Not relocation
	for (int i = 0; i < n; ++i) {
		v1.push_back(i); // Fills the reserved memory
	        if (i == 10) x = &v1[i]; // No error;
	}

	vector<int> v2;
	v2.resize(n + 1);// Fills 0 or random digits
	for (int i = 0; i < n; ++i) {
		v2[i] = i; // push_back add new place and trigger relocation
	}
}	
