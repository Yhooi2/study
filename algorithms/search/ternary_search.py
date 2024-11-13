def findPeak(nums):
    left = 0
    right = len(nums) - 1

    while left <= right:
        segment = (right - left) // 3
        midL = left + segment
        midR = right - segment

        if nums[midL] < nums[midR]:
            left = midL + 1  
        else:
            right = midR - 1

    return left

nums = [3, 2, 1, 4, 5]
idx_peak = findPeak(nums)

print(nums[idx_peak])
