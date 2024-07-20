import numpy as np

A = np.array([[0, 0, 1, 1],[0, 3, 1, -7],[2, 7, 6, 1], [1,2,2,1]])
A_inv = np.linalg.inv(A)
print(A_inv[2,1])
