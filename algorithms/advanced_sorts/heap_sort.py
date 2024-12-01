import heapq
#simple algo O(n) - memory

def heap_sort(arr):
    heapq.heapify(arr)
    res = []
    while arr:
        res.append(heapq.heappop(arr))
    return res
arr = [12,5,4,3,6,2,1]
print(heap_sort(arr))
print(arr)

def heap_sort_inplace(arr):

    def heapify(n, i):
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2

        if left < n and arr[left] >  arr[largest]:
            largest = left
        if right < n and arr[right] > arr[largest]:
            largest = right
        
        if largest != i:
            arr[largest], arr[i] = arr[i], arr[largest]
            heapify(n, largest)

    
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1): # last node
        heapify(n, i)

    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(i, 0)
        
    return(arr)
    
print(heap_sort_inplace([12, 11, 13, 5, 6, 7]))