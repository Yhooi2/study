import random

class ImplicitTreap:
    class Node:
        def __init__(self, val, priority=None):
            self.value = val
            self.priority = priority or random.random()
            self.size = 1
            self.left = None
            self.right = None

    def __init__(self, arr=None):
        self.root = None
        if arr:
            for i, val in enumerate(arr):
                self.insert(i, val)
    
    def __len__(self):
        return self.root.size if self.root else 0
    
    def _get_size(self, node):
        return node.size if node else 0
    
    def _update_size(self, node):
        if node:
            node.size = (
                1 + self._get_size(node.left)
                  + self._get_size(node.right)
            )
    
    
    def split(self, root, idx):
        if not root:
            return None, None
        
        cur_idx = self._get_size(root.left)
        if idx <= cur_idx:
            left, right = self.split(root.left, idx)
            root.left = right
            self._update_size(root)
            return left, root
        else:
            left, right = self.split(root.right, idx - cur_idx - 1)
            root.right = left
            self._update_size(root)
            return root, right

    def merge(self, left, right):
        if not left: return right
        if not right: return left

        if left.priority > right.priority:
            left.right = self.merge(left.right, right)
            self._update_size(left)
            return left
        else:
            right.left = self.merge(left, right.left)
            self._update_size(right)
            return right
        
    def insert(self, idx, val):
        left, right = self.split(self.root, idx)
        new_node = self.Node(val)
        self.root = self.merge(self.merge(left, new_node), right)

    def remove(self, idx):
        left, temp = self.split(self.root, idx)
        _, right = self.split(temp, 1)
        self.root = self.merge(left, right)

    def get(self, idx):
        node = self._find(self.root, idx)
        return node.value if node else None

    def _find(self, node, idx):
        if not node:
            return None
        left_size = self._get_size(node.left)

        if idx < left_size:
            return self._find(node.left, idx)
        elif idx > left_size:
            return self._find(node.right, idx - left_size - 1)
        else:
            return node
    
    def to_array(self):
        res = []
        self._inorder_traversal(self.root, res)
        return res

    def _inorder_traversal(self, node, res):
        if node:
            self._inorder_traversal(node.left, res)
            res.append(node.value)
            self._inorder_traversal(node.right, res)



def demonstrate_implicit_treap():
    """
    Демонстрация работы персистентного массива
    """
    # Создание массива
    treap = ImplicitTreap([1, 2, 3, 4, 5])
    print("Исходный массив:", treap.to_array())

    # Вставка элемента
    treap.insert(2, 10)
    print("После вставки 10 по индексу 2:", treap.to_array())

    # Удаление элемента
    treap.remove(3)
    print("После удаления элемента по индексу 3:", treap.to_array())

    # Получение элемента
    print("Элемент по индексу 2:", treap.get(2))

# Запуск демонстрации
demonstrate_implicit_treap()