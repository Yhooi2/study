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

for i in range(n - 1):
    if arr[i] > arr[i+1]:
        fl = True
        for j in range(i, -1, -1):
            if arr[j] <= arr[i+1]:
                arr.insert(j+1, arr[i+1])
                arr.pop(i+2)
                fl = False
                break
        if fl:
            arr.insert(0, arr[i+1])
            arr.pop(i+2)

#################################################
#print('sorted:')
#print(arr)
"""
elapsed_time = timeit.timeit(code_to_test, number=5)/5
print(elapsed_time)
