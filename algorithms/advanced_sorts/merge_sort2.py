# Merge sort
import timeit

code_to_test = """
import random
import sys
sys.setrecursionlimit(100000)



#################################################

def merge( leftHealf, rightHealf ):
    lenLeft = len( leftHealf )
    lenRight = len( rightHealf )
    arrFull = list()
    j = 0
    for i in range( lenRight ):
        while j <  lenLeft and leftHealf[ j ] <= rightHealf[ i ]:
            arrFull.append( leftHealf[ j ] )
            j += 1

        arrFull.append( rightHealf[ i ] ) 
    for i in range( j, lenLeft ):
        arrFull.append( leftHealf[ i ] )
    return arrFull 

def mergeSort( arr, mid ):
    if mid == 0:
        return arr
    
    leftHealf = arr[ :mid ]
    rightHealf = arr[ mid: ]
    midLeftHealf = len( leftHealf) // 2 
    midRightHealf = len( rightHealf) // 2

    leftHealfSort = mergeSort( leftHealf, midLeftHealf )
    rightHealfSort = mergeSort( rightHealf, midRightHealf )
    
    return merge( leftHealfSort, rightHealfSort )

n = 10000
arr = list()
for i in range(n):
    number = random.randint(1, 100)
    arr.append( number )
#print('Not sorted:')
#print(arr)
#print('------')
mid = len( arr ) // 2
arrSort = mergeSort( arr, mid )
#print( arrSort )
#################################################
#print('sorted:')
"""
elapsed_time = timeit.timeit(code_to_test, number=20)/20
print(elapsed_time)
