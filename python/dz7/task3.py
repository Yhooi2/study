s = set()
n = input().split()
for i in n:
    if i in s:
        print(i, 'YES')
    else:
        print(i, 'NO')
        s.add(i)
        
