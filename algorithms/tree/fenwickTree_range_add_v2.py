class BinaryIndexedTree:
    def __init__(self, n):
        self.btree = [0] * n
        self.ratio = [0] * n

    def _add(self, arr, i, val):
        while i < len(arr):
            arr[i] += val
            i |= i + 1

    def _sum(self, arr, i):
        res = 0
        while i >= 0:
            res += arr[i]
            i = (i & (i + 1)) - 1
        return res

    def range_add(self, left, right, val):
        self._add(self.btree, left, val)
        self._add(self.btree, right + 1, -val)
        self._add(self.ratio, left, val * (left - 1))
        self._add(self.ratio, right + 1, -val * right)

    def range_sum(self, left, right):
        return self._sum(self.btree, right) * right - self._sum(self.ratio, right) - (self._sum(self.btree, left - 1) * (left - 1) - self._sum(self.ratio, left - 1) if left > 0 else 0)



bit = BinaryIndexedTree(5)
bit.range_add(0, 0, 1)
bit.range_add(1, 1, 2)
bit.range_add(2, 2, 3)
bit.range_add(3, 3, 4)
bit.range_add(4, 4, 5)

print(bit.range_sum(2, 2))  #  3
print(bit.range_sum(1, 3))  #  9 (2 + 3 + 4)
bit.range_add(1, 3, 1)
print(bit.range_sum(2, 2))  #  4
print(bit.range_sum(1, 3))  #  12 (3 + 4 + 5)
