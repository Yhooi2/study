#include <string>
#include <fstream>
#include <sstream>
#include <iostream>

int main() {
    std::ifstream fin("coordinates.txt");
    if (fin.is_open()) {
        std::string coordinates;
        double lat, lon;

        while (std::getline(fin, coordinates)) {
            std::stringstream ss(coordinates);
            ss.ignore(1);
            ss >> lat;
            ss.ignore(2);
            ss >> lon;
            if ( (int)lat >= 49 && (int)lat <= 80 && (int)lon >= 19 && (int)lon <= 45) {
                std::cout << lat << ", " << lon << std::endl;
            }
        }
    } else if (fin.bad()) {
        std::cout << "Err!";
	return 1;
    } else {
	std::cout << "Err1";
	return 1;
    }
    fin.close();
    return 0;
}
