#include <fstream>

int main() {
    
    std::ofstream ofile("test.txt");
    if (ofile.is_open()) {
        ofile << "Hello, world!";
    }
    return 0;
}
