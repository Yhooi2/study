import numpy as np
a = np.array([[1,2,3],[4,2,1],[1,0,1]])
b = np.array([[1,2,1],[1,-1,2],[1,2,1]])
e = np.identity(3)
print((-1)*a+2*b+(-3)*e)
