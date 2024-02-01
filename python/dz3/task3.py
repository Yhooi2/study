print('input x')
x = int(input())
print('input a')
a = int (input())
print('input b')
b = int (input())

if x <= a and x <= b:
    print(2)
elif x <= a and x > b:
    print('Mike')
elif x <= b and x > a:
    print('Ivan')
elif x <= a + b:
    print(1)
else:
    print(0)
