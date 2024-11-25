import random as rm

N = 20 # count test

def fast_pow(base, exp, mod):
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


def test_Ferma(p):
    if p <= 1: return False
    if p == 2 or p == 3: return True
    if p & 1 == 0: return False

    for _ in range(N):
        a = rm.randint(2, p - 2)
        if fast_pow(a, p - 1, p) != 1:
            return False
    return True
        

print(test_Ferma(int(input())))
