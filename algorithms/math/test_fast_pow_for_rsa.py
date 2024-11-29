import time
import random

def euler_phi(n):
    result = n
    p = 2
    while p * p <= n:
        if n % p == 0:
            while n % p == 0:
                n //= p
            result -= result/p  # result * (1 - 1/p)
        p += 1

    if n > 1: 
        result -= result/n
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
            exp //= 1
  
    return res

def test_fast_exp_performance():
    # Test parameters for RSA-like scenario
    base = random.randint(2, 1000000)  # Random base
    mod = random.randint(1000000, 10000000)  # Large modulus
    large_exp = 10**15  # 1 quadrillion - very large exponent

    print(f"Performance Test Parameters:")
    print(f"Base: {base}")
    print(f"Modulus: {mod}")
    print(f"Exponent: {large_exp}")

    # Measure execution time
    start_time = time.time()
    try:
        result = fast_exp(base, large_exp, mod)
        end_time = time.time()

        print("\nTest Results:")
        print(f"Execution Time: {end_time - start_time:.4f} seconds")
        print(f"Result (last 10 digits): {result % (10**10)}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    test_fast_exp_performance()