#include <string>
#include <fstream>
#include <iostream>

int main() {
    std::ifstream ifile("test.txt");
    if (ifile.is_open()) {
        std::string line;
	std::getline(ifile, line);
	std::cout << line << std::endl;

	ifile.seekg(0, std::ios::beg);

	char c;
	while (ifile.get(c)) {
	    std::cout << c;
	}
    }
    return 0;
}
