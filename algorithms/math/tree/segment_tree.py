class SegmentTree:
    def __init__(self, arr):
        self.size = 1 << (len(arr) - 1).bit_length()
        self.arr = [0] * (2* self.size - 1)
        self.size -= 1
        
        # Copy arr
        for i, n in enumerate(arr):
            self.arr[self.size + i] = n
        print(self.arr)

        # Bild Tree
        for i in range(len(self.arr)-1, 0, -1):
            self.arr[(i - 1) // 2] += self.arr[i]
    
    def set(self, index, value):
        i = self.size + index
        self.arr[i] = value

        while i:
            i = (i - 1) // 2
            self.arr[i] = self.arr[2*i + 1] + self.arr[2*i + 2]
    
    def sum(self, begin, end):
        left = begin + self.size
        right = end + self.size - 1
        result = 0
        while left <= right:
            if left % 2 == 0:
                result += self.arr[left]
            left //= 2
            if right % 2 == 1:
                result += self.arr[right]
            right = right // 2 - 1 
        return result


# Demonstration
arr = [1, 3, 5, 7, 9, 11, 4, 2]
l = len(arr)
print(sum(arr))
st = SegmentTree(arr)
print(st.sum(0, l), sum(arr))
print(st.sum(1, 7), sum(arr[1:7]))
print(st.sum(4, 5), sum(arr[4:5]))
print(st.sum(1, 5), sum(arr[1:5]))

st.set(2, 6)
st.set(1, 10)
st.set(5, 1)
