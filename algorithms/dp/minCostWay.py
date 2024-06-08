
n = int(input())
price =[0] + list(map(int, input().split()))

prevCost, currCost = price[1], price[2]
minCost = prevCost
for i in range(3, n + 1):
    minCost = price[i] + min(prevCost, currCost)
    prevCost, currCost = currCost, minCost

print(minCost)
