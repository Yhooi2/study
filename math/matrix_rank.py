import numpy as np
from numpy.linalg import matrix_rank

m = np.array([[1,1,2,3,-1], [2,-1,0,-4,-5], [-1,-1,0,-3,-2], [6,3,4,8,-3]])
print(matrix_rank(m))
