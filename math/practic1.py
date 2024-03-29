import numpy as np

A = np.array([(1,0,1),(2,3,5),(0,4,8)])
At = np.transpose(A)
print(np.linalg.det(At))
