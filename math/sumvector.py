import numpy as np

#A = np.array([[1,1,-1],[8,3,-6],[-4,-1,3]])
#B = np.array([1,2,-3])
#print(np.linalg.solve(A,B))
A = np.array([1,-1,-1,2])
B = np.array([2,-1,3,-3])
C = np.array([-3,2,-8,4])
D = A - 5 *B + C
print(D)
