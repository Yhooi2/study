class BTree:
    class Node:
        def __init__(self, t, is_leaf=False):
            self.t = t
            self.is_leaf = is_leaf
            self.keys = []
            self.children = []
        
        def __str__(self):
            return f"Keys: {self.keys}, IsLeaf: {self.is_leaf}"
        
    def __init__(self, t=3):
        self.root = self.Node(t, True)
        self.t = t
    
    def _split_child(self, parent, i):
        t = self.t
        full_child = parent.children[i]
        new_child = self.Node(t, full_child.is_leaf)
        parent.keys.insert(i, full_child.keys[t-1])
        parent.children.insert(i + 1, new_child)

        new_child.keys = full_child.keys[t:]
        full_child.keys = full_child.keys[:t - 1]

        if not full_child.is_leaf:
            new_child.children = full_child.children[t:]
            full_child.children = full_child.children[:t]

    
    def insert(self, key):
        root = self.root
        if len(root.keys) == 2 * self.t - 1: # full root
            new_root = self.Node(self.t)
            new_root.children.append(self.root)
            self._split_child(new_root, 0)
            self.root = new_root
            self._insert_non_full(new_root, key)
        else:
            self._insert_non_full(root, key)
    
    def _insert_non_full(self, node, key):
        i = len(node.keys) - 1
        if node.is_leaf:
            node.keys.append(None)
            while i >= 0  and key < node.keys[i]:
                node.keys[i + 1] = node.keys[i]
                i -= 1
            node.keys[i + 1] = key
        else:
            while i >= 0 and key < node.keys[i]:
                i -= 1
            i += 1
            if len(node.children[i].keys) == 2* self.t - 1:
                self._split_child(node, i)
                if key > node.keys[i]:
                    i += 1
            self._insert_non_full(node.children[i], key)

    def delete(self, key):
        self._delete(self.root, key)

    
    def find(self, node, key):
        i = 0
        while i < len(node.keys) and key > node.keys[i]:
            i += 1
        if i < len(node.keys) and key == node.keys[i]:
            return node, i
        if node.is_leaf:
            return None
        return self.find(node.children[i], key)
    
    def traverse(self, node=None):
        if node is None:
            node = self.root
        for i in range(len(node.keys)):
            if not node.is_leaf:
                self.traverse(node.children[i])
            print(node.keys[i], end = ' ')
        if not node.is_leaf:
            self.traverse(node.children[-1])

if __name__ == "__main__":
    btree = BTree(3)  # t=3, минимальный фактор ветвления
    elements = [10, 20, 5, 6, 12, 30, 7, 17]
    for el in elements:
        btree.insert(el)

    print("Обход дерева:")
    btree.traverse()
    print()

    search_key = 12
    result = btree.find(btree.root, search_key)
    if result:
        print(f"Ключ {search_key} найден в узле: {result[0]}")
    else:
        print(f"Ключ {search_key} не найден")