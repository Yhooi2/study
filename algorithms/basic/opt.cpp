#include <iostream>

using namespace std;
// gcc .cpp -o0
// MSVC
int foo(int x) {
    if (x % 2 == 0) return x / 2;
    else return (3 * x + 1) / 2;
}

int main() {
    for (long long i = 0; i < (long long) 1e11; ++i);
    int x = 1;
    cin >> x;
    cout << foo(x);
}
