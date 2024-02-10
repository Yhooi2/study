#Cocktail sort
#Shuffle sort
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
    fl = 0
    for j in range(i, n-1-i):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
            fl = 1
    
    for k in range(n-1-i, i, -1):
        if arr[k-1] > arr[k]:
            arr[k], arr[k-1] = arr[k-1], arr[k]
            fl = 1

    if fl == 0:
        break
        
    #################################################
#print('sorted:')
#print(arr)
"""
elapsed_time = timeit.timeit(code_to_test, number=5)/5
print(elapsed_time)
