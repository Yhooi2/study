
def factorial(n):
    if n == 1 or n == 0:
        return 1
    return factorial(n - 1) * n

n = int(input())
print(factorial(n))

