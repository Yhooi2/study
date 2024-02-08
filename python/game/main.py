from pynput import keyboard
from map import Map
from helicopter import Helicopter as Helico
from clouds import Clouds
import time 
import os
import json

TICK_SLEEP = 0.1
TREE_UPDATE = 10
CLOUDS_UPDATE = 70
FIRE_UPDATE = 100 
MAP_W, MAP_H = 20, 10

MOVES = {'w': (-1, 0), 'd': (0, 1), 's': (1, 0), 'a':(0, -1)}
# f - save, g - recovery

def process_key(key):
    global helico, clouds, field
    c = key.char.lower()

    # moves the helicopter
    if c in MOVES.keys():
        dx, dy = MOVES[c][0], MOVES[c][1]
        helico.move(dx, dy)

    # saving the game
    elif c == 'f':
        data = {'helicopter': helico.export_data(),
                'clouds': clouds.export_data(),
                'field': field.export_data()}

        with open('level.json', 'w') as lvl:
            json.dump(data, lvl)
    # loading the game
    elif c == 'g':
        with open('level.json', 'r') as lvl:
            data = json.lead(lvl)
            helico.import_data(data['helicopter'])
            field.import_data(data['field'])
            clouds.import_data(data['clouds'])

listener = keyboard.Listener(
        on_press=None,
        on_release=process_key)
listener.start()

field = Map(MAP_W, MAP_H)
clouds = Clouds(MAP_W, MAP_H)
helico = Helico(MAP_W, MAP_H)
tick = 1

while True:
    os.system("cls") # clear
    field.process_helicopter(helico, clouds)
    helico.print_stats()
    field.print_map(helico, clouds)
    print()
    tick += 1
    time.sleep(TICK_SLEEP)
    if (tick % TREE_UPDATE == 0):
        field.generate_tree()
    if (tick % FIRE_UPDATE == 0):
        field.update_fire()
    if (tick % CLOUDS_UPDATE == 0):
        clouds.update()
