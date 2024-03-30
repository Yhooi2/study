import numpy as np

A = np.array([[1,1,1],[1,2,1],[1,1,2]])
B = np.array([1,2,3])
print(np.linalg.solve(A,B))
