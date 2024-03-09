
N = int(input())
sign = ""
if N < 0:
    sign = "-"
    N *= -1

F = [0] * 10
while N > 9:
    F[N%10] += 1
    N //= 10
F[N] += 1
print(sign, end="")
for i in range (10):
    while F[i]:
        print (i, end="")
        F[i] -= 1
print('')
