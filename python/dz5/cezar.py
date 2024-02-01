t = input()
n = int(input())
s = ""

for c in t:
    s += chr(ord(c) + n)
print(s)
