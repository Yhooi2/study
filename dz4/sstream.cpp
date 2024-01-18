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
            if ( lat > 50 && lat < 80 && lon > 20 && lon < 45) {
                std::cout << lat << ", " << lon << std::endl;
            }
        }
    }
    fin.close();
    return 0;
}
