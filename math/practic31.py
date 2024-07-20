import numpy as np

A = np.array([[2,1,0,0],[1,2,1,0],[0,1,2,1],[0,0,1,2]])
B = np.array([0,0,0,5])
detA = np.linalg.det(A)
print(detA, np.linalg.solve(A,B), sep='\n')
