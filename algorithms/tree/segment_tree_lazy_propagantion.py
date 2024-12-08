class SegmentTree:
    def __init__(self, arr):
        self.arr = arr
        size = 1 << (len(arr) - 1).bit_length()
        size = 2*size - 1
        self.tree= [0] * size
        self.lazy = [0] * size

        self._build()
        
    def _build(self, node=0, left=0, right=None):
        if right is None: right = len(self.arr)
        self.__build(node, left, right)

    def __build(self, node, left, right):
        if right - left == 1:
            self.tree[node] = self.arr[left]
            return
        
        mid = (left + right) // 2
        child = 2 * node
        self.__build(child + 1, left, mid)
        self.__build(child + 2, mid, right)
        self.tree[node] = self.tree[child + 1] + self.tree[child + 2]
    

    def _propagate(self, node, start, end):
        if self.lazy[node] != 0:
            self.tree[node] += (end - start) * self.lazy[node]
        if end - start != 1:
            for i in [1, 2]:
                self.lazy[2*node + i] += self.lazy[node]
        self.lazy[node] = 0

    def _lazy_add(self, val, start, end, node, left, right):
        if right <= start or left >= end:
            return
        
        if left >= start and right  <= end:
            self.lazy[node] += val
            return
     
        self._propagate(node, left, right)
        mid = (left + right) // 2
        child = 2*node
        self._lazy_add(val, start, end, child + 1, left, mid)
        self._lazy_add(val, start, end, child + 2, mid, right)

        leftSum = self._query(child + 1, left, mid, left, mid)
        rightSum = self._query(child +2, mid, right, mid, right)
        self.tree[node] = leftSum + rightSum


    def _query(self, node, start, end, left, right):
        if start >= right or end <= left:
            return 0
        if start <= left and end >= right:
            self._propagate(node, left, right)
            return self.tree[node]
        
        self._propagate(node, left, right)
        mid = (left + right) // 2
        child = 2*node
        leftSum = self._query(child + 1, start, end, left, mid)
        rightSum = self._query(child +2, start, end, mid, right)
        return leftSum + rightSum
        
        
    def query(self, start=0, end=None):
        if end == None: end = len(self.arr)
        return self._query(0, start, end, 0, len(self.arr))
        
    def lazy_add(self, val, start=0, end=None):
        if end is None: 
            end = len(self.arr)
        self._lazy_add(val, start, end, 0, 0, len(self.arr))

        




arr = [5, 3, 8, 6]
st = SegmentTree(arr)
print(st.tree)
print("Сумма всего массива:", st.query())  # Ожидается: 22
print("Сумма от 0 до 2 индекса:", st.query(0, 3))  # Ожидается: 16
print("Сумма от 1 до 4 индекса:", st.query(1, 4))  # Ожидается: 17

st.lazy_add(2)  # Добавляем 2 ко всем элементам
print(st.tree, st.lazy)
print("Сумма после ленивого обновления:", st.query())  # Ожидается: 30
print(st.tree, st.lazy)
print("Сумма от 0 до 2 индекса после обновления:", st.query(0, 3))  # Ожидается: 22
print(st.tree, st.lazy)
print("Сумма от 1 до 3 индекса после обновления:", st.query(1, 4))  # Ожидается: 23
print(st.tree, st.lazy)
print()
st.lazy_add(3, 1, 4)  # Добавляем 3 к элементам от индекса 1 до 2
print(st.tree, st.lazy)

st.lazy_add(-1, 0, 3)  # Вычитаем 1 у элементов от индекса 2 до 3
print(st.tree, st.lazy)
st.lazy_add(2) 
print(st.tree, st.lazy)
st.lazy_add(2) 
print("Сумма после ленивого обновления:", st.query(2,4)) 

print(st.tree, st.lazy)
st.lazy_add(2) 
print("Сумма после ленивого обновления:", st.query(1,3)) 

print(st.tree, st.lazy)

st.lazy_add(2) 

