
def sieveOfEratoshenes(n):
    sieve = [[] for _ in range(n+1)]

    for i in range(2, n+1):
        sieve[i].append(str(i))

        for j in range(i*2, n+1, i):
            sieve[j].append(str(i))
    
    for i in range(1, n+1):
        print(",".join(sieve[i]))

sieveOfEratoshenes(int(input()))