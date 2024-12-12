import random
class TreapNode:
    def __init__(self, key):
        self.key = key
        self.priority = random.random()
        self.left = None
        self.right = None

class Treap:
    def __init__(self):
        self.root = None
    
    def merge(self, left, right):
        if not left:
           return right
        if not right:
           return left
       
        if left.priority > right.priority:
           left.right = self.merge(left.right, right)
           return left
        else:
            right.left = self.merge(left, right.left)
            return right
    
    def split(self, root, key):
        if not root:
            return None, None
        
        if key < root.key:
            left, right = self.split(root.left, key)
            root.left = right
            return left, root
        else:
            left, right = self.split(root.right, key)
            root.right = left
            return root, right
        
    def insert(self, key):
        if not self.root:
            self.root = TreapNode(key)
            return
        left, right = self.split(self.root, key)
        new_node = TreapNode(key)
        self.root = self.merge(left, new_node)
        self.root = self.merge(self.root, right)
    
    def remove(self, key):
        if not self.root:
            return
        left, right = self.split(self.root, key)
        left, _ = self.split(left, key - 1)

        self.root = self.merge(left, right)

    def _inorder_traversal(self, node, res):
        if node:
            self._inorder_traversal(node.left, res)
            res.append(node.key)
            self._inorder_traversal(node.right, res)

    def inorder_traversal(self):
        res = []
        self._inorder_traversal(self.root, res)
        return res
    
def demonstrate_treap():
    treap = Treap()
    
    elements = [5, 2, 7, 1, 3, 6, 8]
    for elem in elements:
        treap.insert(elem)
    
    print("После вставки:", treap.inorder_traversal())
    
    treap.remove(3)
    print("После удаления 3:", treap.inorder_traversal())
    
    treap.insert(4)
    print("После вставки 4:", treap.inorder_traversal())

demonstrate_treap()

