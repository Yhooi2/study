def pow(a, n):
    if n == 0:
        return 1
    return pow(a, n-1) * a

a, n = map(int, input().split())
print(pow(a,n))
