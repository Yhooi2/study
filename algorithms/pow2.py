def pow(a, n):
    if n == 0:
        return 1
    elif n % 2: # odd
        return pow(a, n-1) * a
    else: # even
        return pow(a**2, n//2) 

a, n = map(int, input().split())
print(pow(a, n))
    


