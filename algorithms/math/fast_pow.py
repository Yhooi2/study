def fast_pow(base, exp):
    if exp == 0: return 1
    if exp & 1:
        return base * fast_pow(base, exp - 1)
    return fast_pow(base**2, exp // 2)

base, exp = map(int, input().split())
print(fast_pow(base, exp))