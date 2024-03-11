def left_bound(arr:list, key):
    left = -1
    right = len(arr)

    while (left - right) > 1:
        mid = (right - left) // 2
        if arr[mid] < key:
            left = mid
        else:
            right = mid



