# Merge sort
import timeit

code_to_test = """
import random
import array

n = 500000
arr = array.array('i',[0]) * n
for i in range(n):
    number = random.randint(1, 100)
    arr.append(number)

#print('Not sorted:')
#print(arr)
#print('------')

#################################################

def merge( arrLeftSort, arrRightSort ):
    lenLeft = len( arrLeftSort )
    lenRight = len( arrRightSort )
    arrFull = array.array( 'i', [ 0 ] ) * ( lenLeft + lenRight )
    index = 0
    j = 0
    for i in range(lenRight):
        while j <  lenLeft and arrLeftSort[ j ] <= arrRightSort[ i ]:
            arrFull[ index ] = arrLeftSort[ j ]
            index += 1
            j += 1
        arrFull[ index ] = arrRightSort[ i ]
        index += 1
    return arrFull    

def mergeSort( arr ):
    size = len( arr )
    if size < 2:
        return arr
    sizeHalf = size // 2

    arrLeft = array.array( 'i', [ 0 ] ) * sizeHalf
    for i in range( sizeHalf ):
        arrLeft[ i ] = arr[ i ]

    arrRight = array.array( 'i', [ 0 ] ) * ( size - sizeHalf )
    for i in range( sizeHalf, size ):
        arrRight[ i ] = arr[ i ]
        
    arrLeftSort = mergeSort( arrLeft )
    arrRightSort = mergeSort( arrRight )
    
    return merge( arrLeftSort, arrRightSort )

print( mergeSort( arr ) )

#################################################
#    print('sorted:')
#print(arr)
"""
elapsed_time = timeit.timeit(code_to_test, number=5)/5
print(elapsed_time)
