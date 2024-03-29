
import numpy as np

A = np.array([[1,2,0],[0,2,-1],[-2,1,4]])
E = np.eye(3)
A2 = A@A
A3 = 3*A2
A4 = -5*A
A5 = A3+A4
A6 = A5 + 2*E
print(A, A2, A3, A4, A5, A6, sep='\n')
print(((3*(A @ A)) - (5*A)) + 2*E)
