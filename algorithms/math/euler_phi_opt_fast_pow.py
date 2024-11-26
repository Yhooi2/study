
def euler_phi(n):
    result = n
    p = 2
    while p * p <= n:
        if n % p == 0:
            while n % p == 0:
                n //= p
            result *= (1 - 1/p)
        p += 1

    if n > 1: result *=(1 - 1/n)
    return int(result)

def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def fast_exp(base, exp, mod):
    if gcd(base, mod) == 1:
        exp %= euler_phi(mod)

    res = 1
    base %= mod
    while exp:
        if exp & 1:
            res = (res * base) % mod
            exp -= 1
        else:
            base = (base * base) % mod
            exp //= 2
  
    return res


base, exp, mod = map(int, input().split())
print(fast_exp(base, exp, mod))
