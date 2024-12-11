class DifferenceArray:
    def __init__(self, arr):
        self.diff_array = [0] * (len(arr) + 1)
        self.arr = arr
    
    def range_add(self, left=0, right=None, val=1):
        self.diff_array[left] += val
        if right is None: return
        if right + 1 < len(self.arr):
            self.diff_array[right + 1] -= val
    
    def get_mod(self):
        diff = 0
        for i in range(len(self.arr)):
            diff += self.diff_array[i]
            self.arr[i] += diff
            self.diff_array[i] = 0
        return self.arr

arr = [1, 3, 5, 7, 9, 11]
psa = DifferenceArray(arr)

operations = [
    (1, 3, 5),
    (2, 4, 3),
    (0, 5, 2),
    (3, 5, 4)
]

for (left, right, value) in operations:
    psa.range_add(left, right, value)

mod_array = psa.get_mod()

print("Modified array:", mod_array)

expected_array = [3, 10, 15, 21, 18, 17]
print("Expected array:", expected_array)
print("Result is correct:", mod_array == expected_array)
psa.range_add()
psa.range_add()
psa.range_add()
print(psa.get_mod())