my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,15, 16]

def rec(n):
    if n < 0:
        return
    rec(n - 1)
    print(my_list[n], end=' ')

size = len(my_list) - 1
rec(size)
print("Конец списка")
