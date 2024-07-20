import numpy as np

A = np.array([(1,0,1),(2,3,5),(0,4,8)])
At = np.transpose(A)
print(np.linalg.det(At))
B = np.array ([[1,2,3,4],[5,8,2,1],[3,-1,2,0],[0,5,4,3]])
print(np.linalg.det(B))
detA = np.linalg.det(A)
print(detA, np.linalg.inv(A) * detA, sep='\n')
