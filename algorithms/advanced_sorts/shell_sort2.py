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

step = n
while step > 1:
    step = step // 2
    for i in range(step, n):
        nextStep = i - step 
        if arr[nextStep] > arr[i]:
            current = i
            tmp = arr[i]
            while current > 0 and arr[nextStep] > tmp:
                arr[current] = arr[nextStep]
                nextStep -= step
                current -= step 
            arr[current] = tmp


#################################################
#       print('sorted:')
#       print(arr)
"""
elapsed_time = timeit.timeit(code_to_test, number=5)/5
print(elapsed_time)
