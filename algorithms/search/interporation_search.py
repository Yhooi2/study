def cheak_sorted(arr, ascending=True):
    sign = 2 * int(ascending) - 1
    for i in range(len(arr) - 1):
        if sign * arr[i] > sign * arr[i+1]:
            return False
    return True

def interpolation_search(arr, key):
    """ interpolation search """
    if cheak_sorted(arr) == False:
        arr.sort()
    left = 0
    right = len(arr) - 1
    while arr[left] < key and arr[right] > key:
        if arr[left] == arr[right]:
            break
        mid = (key - arr[left]) * (left -right)//(arr[left] - arr[right]) + left
        if arr[mid] == key:
            return mid
        elif arr[mid] < key:
            left = mid
        else:
            right = mid
    if arr[left] == key:
        return left
    elif arr[right] == key:
        return right
    else:
        return -1
############################# test ##############
def test_search(search_algorithm):
   #print("test: ", search_algorithm.__doc__)
    print("testcase #1 sort: ", end="")
    arr = [-2, 0, 3, 5, 9, 11, 15]
    key = 5
    index = search_algorithm(arr, key)
    print( 'Ok' if arr[index] == key else 'Fail')
 
    print("testcase #2 no sort: ", end="")
    arr = [0, 3, -2, 9, 11, 5, 15]
    key = 5
    index = search_algorithm(arr, key)
    print( 'Ok' if arr[index] == key else 'Fail')

    print("testcase #3 no key: ", end="")
    arr = [0, 3, -2, 9, 11, 5, 15]
    key = 7
    index = search_algorithm(arr, key)
    print( 'Ok' if arr[index] == - 1 else 'Fail')



test_search(interpolation_search)


