from pynput import keyboard
from map import Map
from helicopter import Helicopter as Helico
import time 
import os

TICK_SLEEP = 0.5
TREE_UPDATE = 10
FIRE_UPDATE = 20 
MAP_W, MAP_H = 20, 10
START_COUNT = 3
LONG_RIVER = 10

MOVES = {'w': (-1, 0), 'd': (0, 1), 's': (1, 0), 'a':(0, -1)}
def process_key(key):
    global helico
    c = key.char.lower()
    if c in MOVES.keys():
        dx, dy = MOVES[c][0], MOVES[c][1]
        helico.move(dx, dy)


listener = keyboard.Listener(
        on_press=None,
        on_release=process_key)
listener.start()

field = Map(MAP_W, MAP_H)
field.generate_forest(6, 10)
for i in range(START_COUNT):
    field.generate_river(LONG_RIVER)
    field.add_fire()
print()

helico = Helico(MAP_W, MAP_H)

tick = 1

while True:
    os.system("cls") # clear
    field.print_map(helico)
    print()
    tick += 1
    time.sleep(TICK_SLEEP)
    if (tick % TREE_UPDATE == 0):
        field.generate_tree()
    if(tick % FIRE_UPDATE == 0):
        field.update_fire()
