
n = int(input("Input target: "))
unallowed = list(map(int, input("Input unallowed ways: ").split()))

allowed = [True] * (n + 2)   
for un in unallowed:
    allowed[un] = False

beforeNum, prevNum, currNum = 0, int(allowed[1]), int(allowed[2])
nextNum = int(allowed[n])
for i in range(3, n + 1):
    if allowed[i]:
        nextNum = beforeNum + prevNum + currNum
    else:
        nextNum = 0
    beforeNum, prevNum, currNum = prevNum, currNum, nextNum

print(nextNum)
