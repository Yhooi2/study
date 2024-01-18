#include <string>
#include <sstream>
#include <iostream>

int main() {
    std::string cordinates("(54.847830, 83,094392)");

    std::stringstream ss(cordinates);
    double lat, lon;
    ss.ignore(1);
    ss >> lat;
    ss.ignore(2);
    ss >> lon;
    std::cout << lat << ", " << lon << std::endl;

    return 0;
}
