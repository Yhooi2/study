s = input()
s1 = ''
fl = 0
for c in s:
    if c == ' ' and fl == 1:
        continue
    elif c == ' ' and fl == 0:
        fl = 1
        s1 += c
    else:
        fl = 0
        s1 += c

print(s1)
