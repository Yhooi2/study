class Turtle(object):
    x = 0
    y = 0
    s = 0

    def go_up(self):
        self.y += self.s
    def go_down(self):
        self.y -= self.s
    def go_left(self):
        self.x -= self.s
    def go_right(self):
        self.y += self.s
    def evolve(self):
        self.s += 1
    def degrade(self):
        if self.s - 1 <= 0:
            print('Error')
        else:
            self.s -=1 
    def count_moves(self, x2, y2):
        return x2 - self.x + y2 - self.y

turtle = Turtle()
turtle.go_up()
turtle.go_down()
turtle.go_left()
turtle.go_right()
turtle.evolve()
turtle.degrade()
r = turtle.count_moves(5, 5)
print(r)
