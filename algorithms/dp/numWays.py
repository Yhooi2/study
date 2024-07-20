n = int(input())
nextNum = n
prevNum, currNum = 0, 1

for i in range(2, n + 1):
    nextNum = prevNum + currNum
    prevNum, currNum = currNum, nextNum

print("dp:", nextNum)



def recNumWays(N:int):
    if N < 2: return N

    return recNumWays(N - 1) + recNumWays(N - 2)

print("recursion:", recNumWays(n))

