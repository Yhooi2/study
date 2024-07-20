import numpy as np
A = np.array([[1,4,-1],[0,5,4],[3,-2,5]])
b = np.array([6,-20,-22])
print(sum(np.linalg.solve(A,b)))
