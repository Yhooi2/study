
def generation_permutations(N:int, M:int=-1, prefix=[]):
    M = N if M == -1 else M # by default m = n 
    if M == 0:
        print(*prefix, sep="", end=", ")
    for number in range(N):
        if number in prefix:
            continue
        prefix.append(number)
        generation_permutations(N, M-1, prefix)
        prefix.pop()

generation_permutations(3)

    
