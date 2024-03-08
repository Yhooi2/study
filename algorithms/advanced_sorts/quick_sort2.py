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
    pivot = unorderedList[ 0 ]

    leftHealf = [ i for i in unorderedList[ 1: ] if i <= pivot ]
    rightHealf = [ i for i in unorderedList[ 1: ] if i > pivot ]

    return( quickSort( leftHealf ) + [pivot] + quickSort( rightHealf ) )

n = 10000 
arr = list()
for i in range(n):
    number = random.randint(1, 100)
    arr.append( number )
#print('Not sorted:')
#print(arr)
#print('------')
arrSort = quickSort( arr )

#print( arrSort )
#################################################
#print('sorted:')
"""
elapsed_time = timeit.timeit(code_to_test, number=20)/20
print(elapsed_time)
