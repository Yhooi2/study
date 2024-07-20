import numpy as np

A = np.array([[-1,1],[0,1]])
B = np.array([[-1,2],[-2,1]])
C = np.array([[-5,6], [-7,6]])
invA = np.linalg.inv(A)
invB = np.linalg.inv(B)
detA = np.linalg.det(A)
detB = np.linalg.det(B)
A = invA*detA
B = invB* detB
print(detA, detB)
print(A, B, sep='\n')
print(A @ C @ B)
