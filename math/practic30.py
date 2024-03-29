import numpy as np

A = np.array([[1,2,-1],[-3,1,2],[1,4,3]])
B = np.array([1,0,2])
detA = np.linalg.det(A)
print(detA, np.linalg.solve(A,B)*detA,sep='\n')
