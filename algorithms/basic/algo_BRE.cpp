// algoritm Brenta

#include <iostream>
#include <vector>

using namespace std;

pair<int, int> brent(vector<int>& arr) {
	int slow = 0, fast = arr[0];
	int lam = 1, pow = 1;
	while (slow != fast) {
		if (lam == pow) {
			pow <<= 1;
			slow = fast;
			lam = 0;
		}
		fast = arr[fast];
		++lam;
	}
	int mu = 0;
	slow = 0;
       	fast = 0;
	for (int i = 0; i < lam; ++i) fast = arr[fast];
	while (slow != fast) {
		slow = arr[slow];
		fast = arr[fast];
		++mu;
	}
	return pair<int, int>(mu, lam);
}

int main() {
	int n;
	cin >> n;
	vector<int> v(n);
	for (int i = 0; i < n; ++i) {
		cin >> v[i];
	}
	auto res = brent(v);
	cout << res.first << ' ' << res.second;
}
