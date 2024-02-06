from map import Map
import time 
import os

TICK_SLEEP = 0.5
TREE_UPDATE = 10
FIRE_UPDATE = 20 
MAP_W, MAP_H = 20, 10
START_COUNT = 3
LONG_RIVER = 10

field = Map(MAP_W, MAP_H)
field.generate_forest(6, 10)
for i in range(START_COUNT):
    field.generate_river(LONG_RIVER)
    field.add_fire()
field.print_map()
print()
tick = 1

while True:
    os.system("cls") # clear
    field.print_map()
    print()
    tick += 1
    time.sleep(TICK_SLEEP)
    if (tick % TREE_UPDATE == 0):
        field.generate_tree()
    if(tick % FIRE_UPDATE == 0):
        fire.update_fire()
