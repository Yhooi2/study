from utils import randbool

CELL_TYPES = "🟩🌲🌊🏥🏪"

class Map:
    def print_map(self):
        print('⬛' * (self.w + 2))
        for  row in self.cells:
            print('⬛', end='')
            for cell in row:
                if cell >= 0 and cell < len(CELL_TYPES):
                    print(CELL_TYPES[cell], end='')
            print('⬛')
        print('⬛' * (self.w + 2), end='')

    def check_bounds(self, x, y):
        if (x < 0 or y < 0 or x >= self.h or y >= self.w):
            return False
        return True

#    def generate_rivers():

    def generate_forest(self, r, mxr):
        for ri in range(self.h):
            for ci in range(self.w):
                if randbool(r, mxr):
                    self.cells[ri][ci] = 1


    def __init__(self, w, h):
        self.w = w
        self.h = h
        self.cells = [[0 for i in range(w)] for j in range(h)]
tmp = Map(10, 10)
tmp.generate_forest(4, 10)
tmp.print_map()
