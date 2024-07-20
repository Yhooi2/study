import numpy as np
A = np.array([[4,2,-1],[1,2,1],[0,1,-1]])
b = np.array([0,1,-3])
print(np.linalg.solve(A,b))
