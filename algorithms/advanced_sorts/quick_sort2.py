# Quick sort
import timeit

code_to_test = """
import random
import sys
sys.setrecursionlimit(100000)

#################################################

def quickSort( unorderedList ):
    if len( unorderedList ) < 2:
        return unorderedList
    
    print( unorderedList )
    pivot = unorderedList[ 0 ]

    leftHealf = [ i for i in unorderedList[ 1: ] if i <= pivot ]
    rightHealf = [ i for i in unorderedList[ 1: ] if i > pivot ]

    print( leftHealf, [pivot], rightHealf )
    return( quickSort( leftHealf ) + [pivot] + quickSort( rightHealf ) )

n = 3
arr = list()
for i in range(n):
    number = random.randint(1, 100)
    arr.append( number )
#print('Not sorted:')
#print(arr)
#print('------')
arr = [ 2, 1, 3 ]
arrSort = quickSort( arr )

print( arrSort )
#################################################
#print('sorted:')
"""
elapsed_time = timeit.timeit(code_to_test, number=2)/2
print(elapsed_time)
