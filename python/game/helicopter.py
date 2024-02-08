from utils import randcell
import os

class Helicopter:
    def __init__(self, w, h):
        rc = randcell(w,h)
        rx, ry = rc[0], rc[1]
        self.x = rx
        self.y = ry
        self.h = h
        self.w = w
        self.tank = 0
        self.mxtank = 1
        self.score = 0
        self.lives = 20

    def move(self, dx, dy):
        nx, ny = dx + self.x, dy + self.y
        if (nx >= 0 and ny >= 0 and nx < self.h and ny < self.w):
            self.x, self.y = nx, ny

    def print_stats(self):
        print('❤ ', self.lives, end=' | ')
        print('💧 ', self.tank, '/', self.mxtank, sep='', end=' | ')
        print('🏆', self.score)
    
    def game_over(self):
        os.system('cls') # clear for ubunta
        print ('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
        print ('X                                      X')
        print (f'X      GAME OVER   YOU SCORE: {self.score}      X')
        print ('X                                      X')
        print ('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
        exit(0)

    def export_data(self):
        return {'score': self.score,
                'lives': self.lives,
                'x': self.x, 'y': self.y,
                'tank': self.tank, 'mxtank':self.mxtank}
    def import_data(self, data):
        self.x = data['x'] or 0
        self.y = data['y'] or 0
        self.tank = data['tank'] or 0
        self.mxtank = data['mxtank'] or 1
        self.lives = data['lives'] or 3
        self.score = data['score'] or 0
