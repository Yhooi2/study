def gcd_history(a, b):
    if a < b:
        a, b = b, a
    quotients = []

    while b != 0:
        quotients.append(a // b)
        a, b = b, a % b

    return quotients

def split_unit(a, b):
    quotients = gcd_history(a, b)[-2::-1]
    x, y = 0, 1
    print(quotients)
    for q in quotients:
        x, y = y, x - q*y
        print(x, y)
    return (x, y) if a > b else (y, x)

a, b = map(int, input().split())
x, y = split_unit(a,b)
print(f"Еслм x = {x} и у = {y}, то {a}x + {b}у = {a*x + b * y}")

        


