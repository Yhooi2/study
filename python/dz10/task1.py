import random

matrix1 = [[random.randint(-200, 200) for i in range(10)] for i in range(10)]
matrix2 = [[random.randint(-200, 200) for i in range(10)] for i in range(10)]
result = [[0 for i in range(10)] for i in range(10)]

for i in range(len(matrix1)):
    for j in range(len(matrix1[0])):
        result[i][j] = matrix1[i][j] + matrix2[i][j]

for i in result:
    print (*i)
