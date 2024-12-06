class SegmentTree:
    def __init__(self, arr, operation=sum):
        self.n = len(arr)
        self.operation = operation
        self.neutral = (
            0 if operation == sum else 
            float('inf') if operation == min else
            float('-inf') if operation == max else 1
        )
        
        tree_size = 2 * (1 << self.n.bit_length()) - 1
        self.tree = [self.neutral] * tree_size

        self._build_tree(arr, 0, 0, self.n)
    
    def _build_tree(self, arr, node, start, end):
        if end - start == 1:
            self.tree[node] = arr[start]
            return
        
        mid = (start + end) // 2
        child = 2 * node
        left_child, right_child = child + 1, child + 2

        self._build_tree(arr, left_child, start, mid)
        self._build_tree(arr, right_child, mid, end)

        self.tree[node] = self.operation([
            self.tree[left_child], 
            self.tree[right_child]
        ])


    def update(self, node, start, end, i, value):
        if end - start == 1:
            self.tree[node] = value
            return
        
        mid = (start + end) // 2

        left_child, right_child = 2*node + 1, 2*node + 2
        if i < mid:
            self.update(left_child, start, mid, i, value)
        else:
            self.update(right_child, mid, end, i, value)

        self.tree[node] = self.operation([
            self.tree[left_child],
            self.tree[right_child]
        ])
            


    def query(self, node, start, end, left, right):
        if right <= start or left >= end:
            return self.neutral
        if left <= start and right >= end:
            return self.tree[node]
        
        mid = (start + end) // 2
        child = 2 * node
        left_res = self.query(child + 1, start, mid, left, right)
        right_res = self.query(child + 2, mid, end, left, right)

        return self.operation([left_res, right_res])
    

arr = [1, 3, 5, 7, 9, 11]
N = len(arr)
st = SegmentTree(arr)

print(st.query(0, 0, N, 1, 3))
st.update(0, 0, N, 2, 10)
print(st.query(0, 0, N, 1, 3))


st_min = SegmentTree(arr, min)
print(st_min.query(0,0, N, 0, 5))
