#shell select
import timeit

code_to_test = """
import random

n = 500000
arr = list()
for i in range(n):
    number = random.randint(1, 100)
    arr.append(number)

#print('Not sorted:')
#print(arr)
#print('------')

#################################################

step = n // 2
while step > 0:
    for i in range(step, n, 1):
        curr_idx = i
        idx_check = curr_idx - step
        while curr_idx > 0 and arr[idx_check] > arr[i]:
            arr[curr_idx] = arr[idx_check]
            curr_idx -= step
            idx_check -= step
        arr[curr_idx] = arr[i]
    step = step // 2



#################################################
#    print('sorted:')
#print(arr)
"""
elapsed_time = timeit.timeit(code_to_test, number=1)/1
print(elapsed_time)
