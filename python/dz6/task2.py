n = int(input())
n = []
a = list(map(int, input().split()))
n.append(a[len(a) - 1])
for i in range(2, len(a)):
    n.append(a[i])
n.append(a[0])
print(*n)





