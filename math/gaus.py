import numpy as np
n, m = map(int, input(),split()) # size slay and amount of unknown
x, y = [], []
for i in range(n):
    matr = list(map(int, input().split()))
    x.append(matr[:-1]) # future matrix of unknown co-workers
    y.append(matr[-1]) # future matrix of free term

X = np.vstack(x) # vertically attach to the matrix
Y = np.vstack(y)
XY = np.concatrnate((X, y), axis=1) # unite its
rangX = np.linalg.matrix_rank(X) # Rank matrix of sistem
rangXY = np.linalg.matrix_rank(XY) # Rank augmented matrix

if rangX < rangXY:
    print('No solution of system!')
elif m > rangX:
    print('Infinite number of solutions!')
else:
    qq = np.linalg.solve(X,Y)
    print('Only solution:')
    print(qq)
