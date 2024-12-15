class SplayTree:
    class Node:
        def __init__(self, key):
            self.key = key
            self.left = None
            self.right = None

    def __init__(self, arr=[]):
        self.root = None
        for key in arr:
            self.insert(key)

    def _zig(self, node):
        left = node.left
        node.left = left.right
        left.right = node
        return left
    
    def _zag(self, node):
        right = node.right
        node.right = right.left
        right.left = node
        return right
    
    def _splay(self, root, key):
        if not root or root.key == key:
            return root
        
        if key < root.key:
            if not root.left: # Key lies in left subtree
                return root     
            # Zig-Zig (left, left)
            if key < root.left.key: # key in left subtree
                root.left.left = self._splay(root.left.left, key)
                root = self._zig(root)
            #Zig-Zag(left right)
            elif key > root.left.key: # key in right subtree
                root.left.right = self._splay(root.left.right, key)
                if root.left.right:
                    root.left = self._zag(root.left)
            return self._zig(root) if root.left else root
        
        else: # key lies in right subtree
            if not root.right:
                return root
            # Zag-Zag(right right)
            if key > root.right.key: # key in right subtree
                root.right.right = self._splay(root.right.right, key)
                root = self._zag(root)
            # Zag-Zig(right left)
            elif key < root.right.key:
                root.right.left = self._splay(root.right.left, key)
                if root.right.left:
                    root.right = self._zig(root.right)
            return self._zag(root) if root.right else root
    
    def insert(self, key):
        if not self.root:
            self.root = self.Node(key)
            return
        
        self.root = self._splay(self.root, key)
        if self.root.key == key:
            return 
        node = self.Node(key)
        if key < self.root.key:
            node.right = self.root
            node.left = self.root.left
            self.root.left = None
        else:
            node.left = self.root
            node.right = self.root.right
            self.root.right = None
        self.root = node

    def delete(self, key):
        if not self.root:
            return
        self.root = self._splay(self.root, key)
        if self.root.key != key:
            return
        if self.root.key != key:
            return
        if not self.root.left:
            self.root = self.root.right
        elif not self.root.right:
            self.root = self.root.left
        else:
            left_subtree = self.root.left
            right_subtree = self.root.right
            self.root = self._splay(left_subtree, key)
            self.root.right = right_subtree



    def find(self, key):
        self.root = self._splay(self.root, key)
        return self.root.key == key if self.root else False
        
    def _preorder(self, node):
        if not node:
            return 
        print(node.key, end = ' ')
        self._preorder(node.left)
        self._preorder(node.right)
    
    def preorder(self):
        self._preorder(self.root)

        
tree = SplayTree([10, 20, 30, 40, 50])

# Удаление узлов
print("Initial tree (preorder):")
tree.preorder()
print()

print("Deleting 30:")
tree.delete(30)
tree.preorder()
print()

print("Deleting 50 (root):")
tree.delete(50)
tree.preorder()
print()

print("Deleting 10:")
tree.delete(10)
tree.preorder()
print()

print("Deleting 20:")
tree.delete(20)
tree.preorder()
print()

print("Deleting 40:")
tree.delete(40)
tree.preorder()
print()