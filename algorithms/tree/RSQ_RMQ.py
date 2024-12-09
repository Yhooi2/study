# Range sum query and rang min query

def static_RSQ(arr, l, r):
    '''prefix-sum`'''
    prefix_sum = [0] * (len(arr) + 1)
    for i, n in enumerate(arr):
        prefix_sum[i + 1] = prefix_sum[i] + n
    
    return prefix_sum[r + 1] - prefix_sum[l]

def static_RMQ(arr):
    '''Sort decomposition'''
    n = len(arr)
    block_size = int(n ** 0.5)
    block_min = [float('inf')] * ((n + block_size - 1) // block_size) # ceil(n / block_size)!!!

    for i in range(n):
        block_index = i // block_size 
        block_min[block_index] = min(block_min[block_index], arr[i])
    return block_min, block_size
    


def findMin_RMQ(block_min, block_size, arr, left, right):
    min_value = float('inf')
    while left <= right:
        if left % block_size == 0 and left + block_size - 1 <= right:
            min_value = min(min_value, block_min[left // block_size])
            left += block_size
        else:
            min_value = min(min_value, arr[left])
            left += 1
    return min_value



def test_static_RMQ():
    arr = [5, 2, 4, 1, 7, 3, 6]
    block, size = static_RMQ(arr)

    # Тест 1: Маленький массив
    assert findMin_RMQ(block, size, arr, 1, 4) == 1  # Минимум от 2 до 7

    # Тест 2: Полный массив
    assert findMin_RMQ(block, size, arr, 0, len(arr) - 1) == 1  # Минимум по всему массиву

    # Тест 3: Один элемент
    assert findMin_RMQ(block, size, arr, 3, 3) == 1  # Минимум одного элемента

    # Тест 4: Границы блоков
    assert findMin_RMQ(block, size, arr, 0, 2) == 2  # Минимум в первом блоке

    print("Все тесты для static_RMQ пройдены!")

def test_block_count():
    # Тест 1: Длина делится на block_size без остатка
    assert (10 + 3 - 1) // 3 == 4  # 10 элементов, блоки по 3, 4 блока

    # Тест 2: Длина не делится на block_size
    assert (7 + 3 - 1) // 3 == 3  # 7 элементов, блоки по 3, 3 блока

    # Тест 3: Маленький массив
    assert (2 + 3 - 1) // 3 == 1  # 2 элемента, блоки по 3, 1 блок

    # Тест 4: Один элемент
    assert (1 + 3 - 1) // 3 == 1  # 1 элемент, блоки по 3, 1 блок

    print("Все тесты для block_count пройдены!")

test_block_count() 

test_static_RMQ()