import numpy as np
a = np.array([[1,2,3],[4,2,1],[1,0,1]])
b = np.array([[1,2,1],[1,-1,2],[1,2,1]])
c = np.array([[2,2],[1,4]])
d = np.array([[3,1],[2,1],[-1,2]])
print(np.dot(a,b), '\n','\n', np.dot(b,a), '\n','\n', np.dot(a,d), '\n','\n', np.dot(b,d),'\n','\n', np.dot(d,c))

