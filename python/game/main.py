from map import Map
import time 
import os

TICK_SLEEP = 1 

tmp = Map(20, 10)
tmp.generate_forest(6, 10)
for i in range(3):
    tmp.generate_river(10)
tmp.print_map()
print()
tick = 1

while True:
    os.system("cls") # clear
    tmp.print_map()
    print()
    tick += 1
    time.sleep(TICK_SLEEP)
