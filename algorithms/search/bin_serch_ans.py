print("Input coordinates:")
stalls = sorted([int(x) for x in input().split()])
cows = int(input("Input count of cows:"))

# Binary Search
right = stalls[-1] - stalls[0] 
left = answer = 0

while left <= right:
    mid = (right + left) // 2
    count = 1
    last_pos = stalls[0]

    for pos in stalls[1:]:
        if pos - last_pos >= mid:
            count += 1
            last_pos = pos

            if count >= cows:
                answer = mid
                left = mid + 1
                break

    right = mid - 1

print("Max distance between cows:", answer)
