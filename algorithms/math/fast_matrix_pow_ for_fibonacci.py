import numpy as np

def fast_matrix_pow(matrix, exp):
    if exp == 0:
        return np.eye(len(matrix))
    if exp & 1:
        return np.dot(matrix, fast_matrix_pow(matrix, exp - 1))
    return fast_matrix_pow(np.dot(matrix, matrix), exp // 2)

def fibonacci(n):
    if n < 2: return n

    base = np.array([[1, 1],[1, 0]])
    return fast_matrix_pow(base, n - 1)[0][0]

print(fibonacci(int(input())))