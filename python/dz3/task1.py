n = int(input())
if n < 0:
    if n % 2 == 0:
        print('This number is negative even!')
    else:
        print('This number is negative odd!')
elif n > 0:
    if n % 2 == 0:
        print('This number is positive even!')
    else:
        print('This number is positive odd!')
else:
    print('This number is zero!')
