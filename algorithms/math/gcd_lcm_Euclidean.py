



def gcd_rec(n1, n2):
    if n1 == 0: return n1 + n2
    return gcd_rec(n2 % n1, n1)

a, b = map(int, input().split())
gcd = gcd_rec(a, b)
print(gcd) 
print('lcm:', a * b // gcd)
while a != 0:
    tmp = a
    a = b % a
    b = tmp
print(b)
