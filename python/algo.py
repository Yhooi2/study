n, m = map(int, input().split())

nodes = [[] for i in range(n + 1)]

for _ in range(m):
    i, j = map(int, input().split())
    nodes[i].append(j)
    nodes[j].append(i)
    
def dfs(i, arr):
    visited[i] = True
    arr.append(str(i))

    for n in nodes[i]:
        if not visited[n]:
            dfs(n, arr)

visited = [False] * (n+1)
res = 0
l = []
for i in range(1, n + 1):
    if not visited[i]:
        arr = []
        dfs(i, arr)
        l.append(arr)
        res += 1

print(res)
for n in l:
    print(len(n))
    print(' '.join(n))