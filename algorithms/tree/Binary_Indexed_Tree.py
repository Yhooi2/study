class FenwickTreeStandard:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (self.n + 1)
        self.diff_tree = [0] * (self.n + 1)
        for i in range(self.n):
            self.update(i + 1, arr[i])

    def update(self, index, delta):
        while index <= self.n:
            self.tree[index] += delta
            index += index & (-index)

    def update_diff(self, index, delta):
        while index <= self.n:
            self.diff_tree[index] += delta
            index += index & (-index)

    def prefix_sum(self, index):
        result = 0
        while index > 0:
            result += self.tree[index]
            index -= index & (-index)
        return result

    def prefix_diff_sum(self, index):
        result = 0
        while index > 0:
            result += self.diff_tree[index]
            index -= index & (-index)
        return result

    def get(self, i):
        if i == 0: return 0
        return self.prefix_sum(i + 1) - self.prefix_sum(i)

    def set_value(self, i, val):
        old_val = self.get(i)
        self.update(i + 1, val - old_val)

    def range_sum(self, from_i, to_i):
        if from_i <= 0:
            return self.prefix_sum(to_i + 1)
        return self.prefix_sum(to_i + 1) - self.prefix_sum(from_i)

    def range_add(self, from_i, to_i, val):
        self.update_diff(from_i + 1, val)
        if to_i + 1 <= self.n:
            self.update_diff(to_i + 2, -val)

    def get_with_diff(self, i):
        return self.get(i) + self.prefix_diff_sum(i + 1)

    def range_sum_with_diff(self, from_i, to_i):
        if from_i <= 0:
            return self.prefix_sum(to_i + 1) + (to_i + 1) * self.prefix_diff_sum(to_i + 1)
        return (self.prefix_sum(to_i + 1) - self.prefix_sum(from_i)) + (to_i + 1) * self.prefix_diff_sum(to_i + 1) - (from_i) * self.prefix_diff_sum(from_i)

class FenwickTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.btree = [0] * self.n
        self.diff_btree = [0] * self.n
        for i in range(self.n):
            self.set_value(i, arr[i])

    def get(self, i):
        if i == 0: return 0
        return self.get_sum(i) - self.get_sum(i - 1)

    def set_value(self, i, val):
        old_val = self.get(i)
        while i < self.n:
            self.btree[i] += val - old_val
            i |= i + 1

    def get_sum(self, i):
        res = 0
        while i >= 0:
            res += self.btree[i]
            if i == 0:
                break
            i &= i + 1
            i -= 1
        return res

    def range_sum(self, from_i, to_i):
        if from_i <= 0:
            return self.get_sum(to_i)
        return self.get_sum(to_i) - self.get_sum(from_i - 1)

    def update_diff(self, i, val):
        while i < self.n:
            self.diff_btree[i] += val
            i |= i + 1

    def get_diff_sum(self, i):
        res = 0
        while i >= 0:
            res += self.diff_btree[i]
            if i == 0:
                break
            i &= i + 1
            i -= 1
        return res

    def range_add(self, from_i, to_i, val):
        self.update_diff(from_i, val)
        if to_i + 1 < self.n:
            self.update_diff(to_i + 1, -val)

    def get_with_diff(self, i):
        return self.get(i) + self.get_diff_sum(i)

    def range_sum_with_diff(self, from_i, to_i):
        if from_i <= 0:
            return self.get_sum(to_i) + (to_i + 1) * self.get_diff_sum(to_i)
        return (self.get_sum(to_i) - self.get_sum(from_i - 1)) + (to_i + 1) * self.get_diff_sum(to_i) - (from_i) * self.get_diff_sum(from_i - 1)

# Пример использования
arr = [1, 3, 5, 7, 9, 11]
ft = FenwickTree(arr)
arr1 = [1, 3, 5, 7, 9, 11]
ft1 = FenwickTreeStandard(arr1)

print(ft.range_sum(1, 3) == ft1.range_sum(1, 3))
print(ft.get(2) == ft1.get(2))
ft.set_value(2, 10)
ft1.set_value(2, 10)

print(ft.get(2) == ft1.get(2))
print(ft.range_sum(1, 3) == ft1.range_sum(1, 3))

# Прибавление числа к отрезку
ft.range_add(1, 3, 5)
ft1.range_add(1, 3, 5)

print(ft.range_sum_with_diff(1, 3) == ft1.range_sum_with_diff(1, 3))
print(ft.get_with_diff(2) == ft1.get_with_diff(2))
