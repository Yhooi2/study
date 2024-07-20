import numpy as np
A = np.array([[2,3,11,5],[0,0,2,-2],[3,3,9,5],[2,1,3,2]])
b = np.array([2,4,-2,-3])
print(sum(np.linalg.solve(A,b)))
