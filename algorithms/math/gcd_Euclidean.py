



def gcd_rec(n1, n2):
    if n1 == 0: return n1 + n2
    return gcd_rec(n2 % n1, n1)

a, b = map(int, input().split())
if a > b: a, b = b, a
print(gcd_rec(a, b)) 

while a != 0:
    tmp = a
    a = b % a
    b = tmp
print(b)

