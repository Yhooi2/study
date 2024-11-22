
def sieveOfEratoshenes(n):
    sieve = [1 for _ in range(n+1)]
    for i in range(2, n+1):
        for j in range(i*2, n+1, i):
            sieve[j] = 0
        print(sieve)
    
    for i in range(1, n+1):
        if sieve[i]:
            print(i)

sieveOfEratoshenes(int(input()))