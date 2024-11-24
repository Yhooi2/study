def fast_pow(base, exp):
    if exp == 0: return 1
    if exp & 1:
        return base * fast_pow(base, exp - 1)
    return fast_pow(base**2, exp // 2)

def fast_pow_norec(base, exp):
    res = 1
     
    while exp > 0:
        if exp & 1:
            res *= base
            exp -= 1
        else:
            base *= base
            exp //= 2

    return res


base, exp = map(int, input().split())
print(fast_pow(base, exp))
print(fast_pow_norec(base, exp))