#shell select
import timeit

code_to_test = """
import random

n = 10000
arr = list()
for i in range(n):
    number = random.randint(1, 100)
    arr.append(number)

#print('Not sorted:')
#print(arr)
#print('------')

#################################################

long = n
while n != 1:
    n  = n // 2
    for i in range(n, long):
        step = i - n
        if arr[step] <= arr[i]:
            continue
        arr[step], arr[i] = arr[i], arr[step]
        for j in range(step - n, -1, -n):
            if arr[j] <= arr[step]:
                    break
            arr[j], arr[step] = arr[step], arr[j]
            step = j
                

#################################################
#    print('sorted:')
#print(arr)
"""
elapsed_time = timeit.timeit(code_to_test, number=20)/20
print(elapsed_time)
