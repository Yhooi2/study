#include <iostream>

int sum(int n) {
	int sum = 0;
	for (int i = 1; i <= n; ++i) {
		sum += i;
	}
	return sum;
}

int sumOptimum1(int n) {
	return (1 + n) * n / 2;
}
int main()
{
	int n;
	std::cin >> n;
	std::cout << sum(n) << std::endl;
	std::cout << sumOptimum1(n) << std::endl;
}
