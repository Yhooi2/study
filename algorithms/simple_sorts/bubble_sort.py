# Buble sort
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
    key = 0
    for j in range(n-1-i):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
            key = 1
    if key == 0:
        break

#################################################
end_time = time.time()
#print('sorted:')
#print(arr)
"""
elapsed_time = timeit.timeit(code_to_test, number=5)/5
print(elapsed_time)
