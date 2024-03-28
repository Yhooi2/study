import numpy as np
A = np.array([[3,-6],[1,-2]])
b = np.array([5,-4])
try:
    print(np.linalg.solve(A, b))
except np.linalg.LinAlgError as ex:
    print(ex)
