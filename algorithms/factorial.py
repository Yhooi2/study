def factorial(n:int):
    """recursions function of factorial"""
    assert n >= 0, "number is not natural"
    if n == 1 or n == 0:
        return 1
    return n * factorial(n - 1)

n = int(input())
print(factorial(n))
