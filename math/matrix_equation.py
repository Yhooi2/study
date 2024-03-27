import numpy as np

a = np.array([[3, -1], [5, -2]])
b = np.array([[14, 16], [9, 10]])
c = np.array([[5, 6], [7,8]])
c_inv = np.linalg.inv(c)
b = np.dot(b, c_inv)

a_inv = np.linalg.inv(a)
x = np.dot(a_inv, b)
print(x.sum())
