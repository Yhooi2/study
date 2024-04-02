import numpy as np

A = np.array([0,0,0])
B = np.array([2,2,0])
C = np.array([1,1,1])
v1, v2 = A - C, B - C

print(np.round(np.dot(v1, v2)/(np.linalg.norm(v1) * np.linalg.norm(v2)), 3))
