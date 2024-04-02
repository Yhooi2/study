import numpy as np

f1 = np.array([1,2,2])
f2 = np.array([1,3,1])
f3 = np.array([2,1,1])

e1 = f1
long_e1 = np.linalg.norm(e1)
e1_orto = e1 / long_e1

e2 = f2 - ((e1 @ f2) / (e1 @ e1)) * e1
long_e2 = np.linalg.norm(e2)
e2_orto = e2 / long_e2

e3 = f3 - ((e1 @ f3) / (e1 @ e1)) * e1 - ((e2 @ f3) / (e2 @ e2)) * e2
long_e2 = np.linalg.norm(e3)
e3_orto = e3/ long_e2
print (e1_orto, e2_orto, e3_orto, sep='\n')
