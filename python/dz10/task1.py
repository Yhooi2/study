import random

column, row = map(int, input("Enter size column and row of matrix: ").split())
matrix1 = [[random.randint(-200, 200) for i in range(column)] for i in range(row)]
matrix2 = [[random.randint(-200, 200) for i in range(column)] for i in range(row)]
result = [[0 for i in range(column)] for i in range(row)]

for i in range(len(matrix1)):
    for j in range(len(matrix1[0])):
        result[i][j] = matrix1[i][j] + matrix2[i][j]

for i in result:
    print (*i)
