# Range sum query and rang min query


class PrefixSum:
    """Static RSQ Preprocessing 
    O(n) - best algo for static RSQ"""
    def __init__(self, arr):
        self.prefix_sum = [0] * (len(arr) - 1)
        for i, num in enumerate(arr):
            self.prefix_sum[i + 1] += num
    
    def range_sum(self, left, right):
        '''O(1) - time complexity'''
        return self.prefix_sum[right - 1] - self.prefix_sum[left]

class SqrtDecomposition:
    ''' static RMQ, Preprocesing block 
    O(n) - Time and O(n + n/sqrt(n))'''
    def __init__(self, arr):
        self.arr = arr
        self.block_size = int(len(arr) ** 0.5)
        self.blocks = [float('inf')] * ((self.n + self.block_size - 1) // self.block_size) # ceil(n // size)

        for i, num in enumerate(arr):
            block_index = i // self.block_size
            self.blocks[block_index] = min(self.blocks[block_index], num)

    def range_min(self, left, right):
        '''O(sqrt(n)) - Time'''
        min_val = float('inf')
        while left <= right:
            # Check min_val in the range [left, right]
            if left % self.block_size == 0 and left + self.block_size <= right:
                min_val = min(min_val, self.blocks[left // self.block_size])
                left += self.block_size
            else:
                min_val = min(min_val, self.arr[left])
                left += 1
        return min_val
    
class SparseTable:
    def __init__(self, arr):
        '''RMQ O(nlogn) memory and time'''
        n = len(arr)
        log = n.bit_length()
        self.table = [[0] * n for _ in range(log)]

        for i, num in enumerate(arr):
            self.table[0][i] = num # zero lvl 

        for i in range(1, log): # 1 ... log(n)
            lvl_size = 1 << i # 2, 4, 8... n / 2
            for j in range(n - lvl_size + 1): #  0, 1 ... n - 2, n - 4, n - n / 2
                self.table[i][j] = min( # table[1][0] = ..., 1, 1 .. 1, n-2  - filling one lvl of table, next two and etc
                    self.table[i-1][j], # 0 0, 0 1, ... 0 n - 2- zero lvl, next one and etc
                    self.table[i-1][j + lvl_size // 2] # 0 1, 0 2, ... 0 n - 1 - zero lvl, next one
                )


    def query(self, left, right):
        '''O(1)'''
        k = (right - left + 1). bit_length() - 1 # Calculate lvl 

        return min(
            self.table[k][left].
            self.table[k][right - (1 << k) + 1] # Calc right index for k lvl = right - 2^k + 1 = if base = 8 and lvl = 2 right = 8: 
        ) # 8 - 4 + 1 = 5 = last elem 2 lvl 






