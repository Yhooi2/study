import numpy as np
'''method of least squares'''

f = np.array([4,5,9])
e1 = np.array([1,1,1])
e2 = np.array([-1,0,1])

x = (f @ e1) / (e1 @ e1)
y = (f @ e2) / (e2 @ e2)
print( (4 - x + y)**2 + (5 - x)**2 + (9 - x - y)**2)
