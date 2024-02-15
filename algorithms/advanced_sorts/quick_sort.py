# Quick sort
import timeit

code_to_test = """
import random
import sys
sys.setrecursionlimit(100000)

#################################################

def quickSort( unorderedList ):
    lenUnorderedList = len( unorderedList )
    if lenUnorderedList < 2:
        return unorderedList
    print( unorderedList )
    firstElement = unorderedList[ 0 ]
    rightHealf =list() 
    leftHealf = list()
    mid = list()
    mid.append( firstElement )

    for i in range( 1, lenUnorderedList ):
        if firstElement > unorderedList[ i ]:
            rightHealf.append( unorderedList[ i ] )
        elif firstElement < unorderedList[ i ]:
            leftHealf.append( unorderedList[ i ] )
        else:
            mid.append( unorderedList[ i ] )
            
        rightHealfSort = quickSort( rightHealf )
        leftHealfSort = quickSort( leftHealf )

        print( rightHealfSort, mid, leftHealfSort )
        return( rightHealfSort + mid + leftHealfSort )

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
