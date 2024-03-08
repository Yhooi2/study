
n  =  int(input())
A = [True] * n
A[0] = A[1] = False
for i in range(2, n):
    if A[i]:
        for k in range(2 * i, n, i):
            A[k] = False

for i in range(n):
    if A[i]:
        print(i, end=' ')
