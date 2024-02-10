#selection sort
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

right = n - 1
while 0 < right:
    for i in range (right):
        if arr[i] > arr[right]:
            arr[i], arr[right] = arr[right], arr[i]
    right -= 1
    



#################################################
#print('sorted:')
#print(arr)
"""
elapsed_time = timeit.timeit(code_to_test, number=5)/5
print(elapsed_time)
