class SegmentTree:
    def __init__(self, arr, operation=sum):
        self.size = 1 << (len(arr) - 1).bit_length() # round up to power of two

        self.operation = operation
        self.neutral = (0 if operation == sum else
                float('inf') if operation == min else 
                float('-inf') if operation == max else 1
            )
        self.arr = [self.neutral] * (2 * self.size - 1)
        self.size -= 1

        # Copy arr to tree
        for i, n in enumerate(arr):
            self.arr[i + self.size] = arr[i]
        # Bild Tree
        for i in range(len(self.arr)- 1, 0, -1):
            parent = (i - 1) // 2
            self.arr[parent] = self.operation([
                self.arr[i], self.arr[parent]
            ])

    def set(self, index, value):
        i = self.size + index
        self.arr[i] = value

        # Recount
        while i:
            i = (i - 1) // 2
            self.arr[i] = self.operation([
                self.arr[2*i + 1], self.arr[2*i + 2]
            ])
    
    def get(self):
        return self.arr
    
    def query(self, begin=0, end=None):
        if end is None: end = self.size + 1
        left = self.size + begin
        right = self.size + end - 1

        accum = self.neutral
        while left <= right:
            if left % 2 == 0:
                accum = self.operation([
                    accum, self.arr[left]
                ])
            if right % 2 == 1:
                accum = self.operation([
                    accum, self.arr[right]
                ])
            left = left // 2
            right = right // 2 - 1
        return accum


def mult(vals):
    a, b = vals
    return a * b

# Demonstration
def demonstrate_custom_operations():
    # Sum operation (default)
    arr_sum = [1, 2, 3, 4, 5]
    st_sum = SegmentTree(arr_sum)
    print("Sum Operation:", st_sum.query(), 15)  # Output: 15

    # Multiplication operation
    arr_mult = [2, 3, 4, 5]
    st_mult = SegmentTree(arr_mult, mult)
    print("Multiplication Operation:", st_mult.query(), 120)  # Output: 120
    # MIN and MAX operation
    arr = [2, 3, 4, 5]
    st_min = SegmentTree(arr, min)
    st_max = SegmentTree(arr, max)
    print("Min and max Operations:", st_min.query(), st_max.query())  # Output: 2 5
    arr = [1, 3, 5, 7, 9, 11, 8, 7, 6]
    l = len(arr)
    print(sum(arr))
    st = SegmentTree(arr)
    print(st.query(), sum(arr))
    print(st.query(1, 7), sum(arr[1:7]))
    print(st.query(4, 5), sum(arr[4:5]))
    print(st.query(1, 5), sum(arr[1:5]))

# Run demonstrations
demonstrate_custom_operations()