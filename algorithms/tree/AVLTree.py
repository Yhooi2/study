import unittest


class AVLTree:
    class TreeNode:
        def __init__(self, key):
            self.key = key
            self.left = None
            self.right = None
            self.height = 1
        
    def __init__(self):
        self.root = None
    
    def insert(self, key):
        self.root = self._insert(self.root, key)
        return self.root
    
    def _insert(self, node, key):
        if not node:
            return self.TreeNode(key)
        elif key < node.key:
            node.left = self._insert(node.left, key)
        else:
            node.right = self._insert(node.right, key)

        self._update_height(node)


        balance = self.balance(node)
        if balance > 1 and node.left:
            if key < node.left.key:
                return self._right_rotate(node)
            if key > node.left.key:
                node.left = self._left_rotate(node.left)
                return self._right_rotate(node) 
                       
        if balance < -1 and node.right:
            if key > node.right.key:
                return self._left_rotate(node)
            if key < node.right.key:
                node.right = self._right_rotate(node.right)
                return self._left_rotate(node) 
                          
        return node
    
    def _right_rotate(self, node):
        left = node.left
        temp = left.right      
        left.right = node
        node.left = temp
        self._update_height(node)
        self._update_height(left)
        return left
    
    def _left_rotate(self, node):
        right = node.right
        temp = right.left
        right.left = node
        node.right = temp
        self._update_height(node)
        self._update_height(right)
        return right
    
    def _update_height(self, node):
        left_height = self.get_height(node.left)
        right_height = self.get_height(node.right)
        node.height = 1 + max(left_height, right_height)
    
    def get_height(self, node):
        if not node:
            return 0
        return node.height
    
    def balance(self, node):
        if not node:
            return 0
        left = self.get_height(node.left)
        right = self.get_height(node.right)
        return left - right
    
    def pre_order(self):
        return self._pre_order(self.root, [])

    
    def _pre_order(self, node, res):
        if not node: 
            return res
        res.append(node.key)
        self._pre_order(node.left, res)
        self._pre_order(node.right, res)
        return res


import unittest

class TestAVLTree(unittest.TestCase):
    def setUp(self):
        self.tree = AVLTree()

    def test_insertion(self):
        keys = [10, 20, 30, 40, 50, 25]
        for key in keys:
            self.tree.insert(key)
        # Ожидаемый результат обхода
        self.assertEqual(self.tree.pre_order(), [30, 20, 10, 25, 40, 50])

    def test_balance(self):
        keys = [10, 20, 30, 40, 50, 25]
        for key in keys:
            self.tree.insert(key)
        self.assertTrue(self.is_balanced(self.tree.root))

    def is_balanced(self, node):
        if not node:
            return True
        balance = self.tree.balance(node)
        if abs(balance) > 1:
            return False
        return self.is_balanced(node.left) and self.is_balanced(node.right)

    def test_height(self):
        keys = [10, 20, 30, 40, 50, 25]
        for key in keys:
            self.tree.insert(key)
        self.assertEqual(self.tree.get_height(self.tree.root), 3)

if __name__ == "__main__":
    unittest.main()