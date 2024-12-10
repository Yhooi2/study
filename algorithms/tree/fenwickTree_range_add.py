class FenwickTree:
    def __init__(self, n):
        self.base = [0] * (n + 1)
        self.ratio = [0] * (n + 1)

    def _add(self, arr, i, value):
        while i <= len(arr) - 1:
            arr[i] += value
            i += i & -i
    def _sum(self, arr, i):
        res = 0
        while i > 0:
            res += arr[i]
            i -= i & -i
        return res


    def range_add(self, l, r, val):
        self._add(self.base, l, val)
        self._add(self.base, r + 1,  -val)
        self._add(self.ratio, l, val * (l - 1))
        self._add(self.ratio, r + 1, -val * r)
    
    def prefix_sum(self, i):
        return self._sum(self.base, i) * i - self._sum(self.ratio, i)
    
    def range_sum(self, l, r):
        return self.prefix_sum(r) - self.prefix_sum(l-1)
        

n = 10
fenwick = FenwickTree(n)

fenwick.range_add(2, 5, 5)
fenwick.range_add(4, 8, 10)

print(fenwick.range_sum(3, 7))  

print(fenwick.range_sum(1, 10))  