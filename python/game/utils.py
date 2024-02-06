from random import randint as rand

def randbool(r, mxr):
    t = rand(0, mxr)
    return (t <= r)
