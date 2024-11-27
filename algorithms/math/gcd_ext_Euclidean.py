# ax + by = gcd(a, b)

def gcd_ext(a, b):
    if b == 0: # a*1 + 0 = gcd(a, b) = a
        return a, 1, 0
    
    gcd, x, y = gcd_ext(b, a % b) # ax + bx = gcd(a, b)
    return gcd, y, x - (a // b) * y 
    # bx + ax = bx + (a % b)y = 
    # bx + (a - (a // b) * b)y = 
    # bx + ay - (a//b)by = 
    # ay + b(x - a//b)y) = ax + bx !!!

def solve_diophantine(a, b, c):
    gcd, x, y = gcd_ext(a, b)

    if c % gcd != 0:
        return None
    
    x0 = x * (c // gcd)
    y0 = y * (c // gcd)
    return x0, y0

print(solve_diophantine(15, 25, 10))