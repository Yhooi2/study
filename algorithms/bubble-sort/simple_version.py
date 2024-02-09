# Buble sort
import random

n = 5
arr = list()
for i in range(n):
    number = random.randint(1, 100)
    arr.append(number)

print('Not sorted:')
print(arr)
print('------')

    #################################################

for i in range(n):
    key = 0
    for j in range(n-1):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
            key = 1
    if key == 0:
        break

    #################################################

print('sorted:')
print(arr)
    
