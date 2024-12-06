class SegmentTree:

    def __init__(self, arr, operation=sum):
        n = len(arr)
        self.operation = operation
        self.neutral = (0 if operation == sum else 
            float('inf') if operation == min else
            float('-inf') if operation == max else 1
            )
        self.size = 1 << (n - 1).bit_length()
        self.tree = [self.neutral] * (2 * self.size - 1)

        self._build(0, 0, n)
        print(self.tree)
    
    def _build(self, idx, left, right):
        if right - left == 1:
            self.tree[idx] = arr[left]
            return
        
        mid = (left + right) // 2
    
        left_child = 2*idx + 1
        right_child = 2*idx + 2

        self._build(left_child, left, mid)
        self._build(right_child, mid, right)

        self.tree[idx] = self.operation([
            self.tree[left_child], self.tree[right_child]
        ])
    
    def set(self, idx, val, node=0, left=0, right=None):
        if right is None:
            right = len(arr)
        if right - left == 1:
            self.tree[node] = val
            return
        mid = (right + left) // 2
        l_child = 2*node + 1
        r_child = 2*node + 2
        if idx < mid:
            self.set(idx, val, l_child, left, mid)
        else:
            self.set(idx, val, r_child, mid, right)

        self.tree[node] = self.operation([
            self.tree[l_child], self.tree[r_child]
        ])

    def _query(self, l, r, node, begin, end):
        if end <= l or begin >= r:
            return self.neutral
        if begin >= l and end <= r:
            return self.tree[node]
        
        mid = (begin + end) // 2
        left_tree = self._query(l, r, 2*node + 1, begin, mid)
        right_tree = self._query(l, r, 2*node + 2, mid, end)

        return self.operation([left_tree, right_tree])

    def query(self, left=0, right=None):
        if right is None: right = len(arr)
        return self._query(left, right, 0, 0, len(arr))
               

arr = [1, 3, 5, 7]
st = SegmentTree(arr)
st.set(1, 2)
print(sum(arr))
st_min = SegmentTree(arr, min)
print(min(arr))
st_min.set(0, 2)
print("min", st_min.query())

st_max = SegmentTree(arr, max)
st_max.set(len(arr) - 1, 2)
print(st_max.query())
print(st_max.query(3, 4))
