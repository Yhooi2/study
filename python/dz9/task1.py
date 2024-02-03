def factorial(n):
    if n == 0 or n == 1:
        return n
    return factorial(n-1) * n

l = []
x = int(input())
for i in range(x, 0 , -1):
    l.append(factorial(i))
print(l)
