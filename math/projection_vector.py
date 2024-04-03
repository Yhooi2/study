import numpy as np
a1 = np.array([1,1,-2])
a2 = np.array([1,-1,4])
a = np.array([1,2,7])

b1 = a1
b2 = a2 - ((a2 @ b1) / (b1 @ b1)) * b1
long_b1 = np.linalg.norm(b1)
long_b2 = np.linalg.norm(b2)

b1_orto = b1 / long_b1
b2_orto = b2 / long_b2

bazis = (b1_orto, b2_orto)
a_orto = bazis @ a
print(np.linalg.norm(a_orto))
