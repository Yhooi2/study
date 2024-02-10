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

for i in range(n):
    tmp = arr[i]
    j = i - 1
    while arr[j] > tmp and j >= 0:
        arr[j+1] = arr[j]
        j -= 1
    arr[j+1] = tmp


#################################################
#print('sorted:')
#print(arr)
"""
elapsed_time = timeit.timeit(code_to_test, number=5)/5
print(elapsed_time)
