import math

m = int(input())
n = int(input())
weight = 0;
for i in range(n):
     weight += int(input())
print(math.ceil(weight/m))

