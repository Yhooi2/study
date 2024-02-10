# Insertion sort
import timeit

code_to_test = """
import random

n = 5000 
arr = list()
for i in range(n):
    number = random.randint(1, 100)
    arr.append(number)

#print('Not sorted:')
#print(arr)
#print('------')
#################################################

for i in range(1, n):
    if arr[i-1] > arr[i]:
        fl = True
        tmp = arr[i]
        for j in range(i-1, -1, -1):
            if arr[j] > tmp:
                arr[j+1] = arr[j]
            else:
                arr[j+1] = tmp
                fl = False
                break
        if fl:
            arr[0] = tmp

#################################################
#print('sorted:')
#print(arr)
"""
elapsed_time = timeit.timeit(code_to_test, number=5)/5
print(elapsed_time)
