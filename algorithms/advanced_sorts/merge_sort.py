# Merge sort
import timeit

code_to_test = """
import random
import sys
sys.setrecursionlimit(100000)


n = 500000
arr = list()
for i in range(n):
    number = random.randint(1, 100)
    arr.append( number )
#print('Not sorted:')
#print(arr)
#print('------')

#################################################

def merge( arrLeftSort, arrRightSort ):
    lenLeft = len( arrLeftSort )
    lenRight = len( arrRightSort )
    arrFull = list()
    j = 0
    for i in range( lenRight ):
        while j <  lenLeft and arrLeftSort[ j ] <= arrRightSort[ i ]:
            arrFull.append( arrLeftSort[ j ] )
            j += 1
        arrFull.append( arrRightSort[ i ] )
    arrFull.extend( arrLeftSort[ j: ] ) 
    return arrFull    

def mergeSort( arr ):
    size = len( arr ) 
    if size < 2:
        return arr
    sizeHalf = size // 2

    arrLeft = list()
    for i in range( sizeHalf ):
        arrLeft.append( arr[ i ] )

    arrRight = list()
    for i in range( sizeHalf, size ):
        arrRight.append( arr[ i ] )

    arrLeftSort = mergeSort( arrLeft )
    arrRightSort = mergeSort( arrRight )
    
    return merge( arrLeftSort, arrRightSort )

#################################################
#    print('sorted:')
#print(arr)
"""
elapsed_time = timeit.timeit(code_to_test, number=5)/5
print(elapsed_time)
