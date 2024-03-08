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
    firstElement = unorderedList[ 0 ]
    rightHealf =list() 
    leftHealf = list()
    mid = list()

    for it in unorderedList:
        if firstElement < it:
            rightHealf.append( it )
        elif firstElement > it:
            leftHealf.append( it )
        else:
            mid.append( it )
            
        return ( quickSort( rightHealf ) + mid + quickSort( leftHealf ) )

n = 5
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
