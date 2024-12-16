class BTree:
    class Node:
        def __init__(self, t, leaf=True):
            self.t, self.leaf = t, leaf
            self.keys, self.children = [], []

    def __init__(self, t):
        self.root = self.Node(t)
        self.t = t

    def insert(self, key):
        root, t = self.root, self.t
        if len(root.keys) == 2 * t - 1:
            new_root = self.Node(t, False)
            new_root.children.append(root)
            self._split(new_root, 0)
            self.root = new_root
        self._insert_non_full(self.root, key)

    def delete(self, key):
        self._remove(self.root, key)
        if not self.root.keys and not self.root.leaf:
            self.root = self.root.children[0]

    def _remove(self, node, key):
        idx = next((i for i, k in enumerate(node.keys) if key <= k), len(node.keys))
        if idx < len(node.keys) and node.keys[idx] == key:
            return self._remove_key_found(node, key, idx)     
        if node.leaf:
            return False

        child = node.children[idx]
        if len(child.keys) < self.t:
            self._balance_or_merge(node, idx)
        return self._remove(node.children[idx], key)

    def _remove_key_found(self, node, key, idx):
        if node.leaf:
            node.keys.pop(idx)
            return True

        left, right = node.children[idx], node.children[idx+1]
        t = self.t
        if len(left.keys) >= t:
            pred = self._get_extreme(left)
            node.keys[idx] = pred
            return self._remove(left, pred)
        if len(right.keys) >= t:
            succ = self._get_extreme(right, False)
            node.keys[idx] = succ
            return self._remove(right, succ)
        self._merge_children(node, idx)
        return self._remove(node.children[idx], key)

    def _balance_or_merge(self, parent, idx):
        child = parent.children[idx]
        left_sib = parent.children[idx-1] if idx > 0 else None
        right_sib = parent.children[idx+1] if idx < len(parent.children)-1 else None

        if left_sib and len(left_sib.keys) >= self.t:
            child.keys.insert(0, parent.keys[idx-1])
            parent.keys[idx-1] = left_sib.keys.pop()
            if not child.leaf:
                child.children.insert(0, left_sib.children.pop())
        elif right_sib and len(right_sib.keys) >= self.t:
            child.keys.append(parent.keys[idx])
            parent.keys[idx] = right_sib.keys.pop(0)
            if not child.leaf:
                child.children.append(right_sib.children.pop(0))
        else:
            self._merge_children(parent, idx if idx > 0 else idx)

    def _merge_children(self, parent, idx):
        left, right = parent.children[idx], parent.children.pop(idx + 1)
        left.keys.append(parent.keys.pop(idx))
        left.keys.extend(right.keys)
        if not left.leaf:
            left.children.extend(right.children)

    def _insert_non_full(self, node, key):
        idx = next((i for i, k in enumerate(node.keys) if key <= k), len(node.keys))
        if node.leaf:
            node.keys.insert(idx, key)
            return

        if len(node.children[idx].keys) == 2 * self.t - 1:
            self._split(node, idx)
            if key > node.keys[idx]:
                idx += 1
        self._insert_non_full(node.children[idx], key)

    def _split(self, parent, idx):
        t = self.t
        child = parent.children[idx]
        new_child = self.Node(t, child.leaf)
        parent.keys.insert(idx, child.keys[t - 1])
        parent.children.insert(idx + 1, new_child)
        new_child.keys, child.keys = child.keys[t:], child.keys[:t - 1]
        
        if not child.leaf:
            new_child.children, child.children = child.children[t:], child.children[:t]

    def _get_extreme(self, node, left=True):
        while not node.leaf:
            node = node.children[0 if left else -1]
        return node.keys[0 if left else -1]

    def traverse(self, node=None):
        def _recurse(n):
            for i, key in enumerate(n.keys):
                if not n.leaf:
                    _recurse(n.children[i])
                print(key, end=' ')
            if not n.leaf: _recurse(n.children[-1])
        _recurse(node or self.root)

btree = BTree(3)  # t=3
elements = [10, 20, 5, 6, 12, 30, 7, 17]
for el in elements:
    btree.insert(el)
btree.traverse()
print()
btree.delete(6)
btree.traverse()