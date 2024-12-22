class RBNode:
    def __init__(self, key, color="RED", left=None, right=None, parent=None):
        self.key = key
        self.color = color
        self.left = left
        self.right = right
        self.parent = parent

class RedBlackTree:
    def __init__(self):
        self.NIL = RBNode(None, color="BLACK")
        self.root = self.NIL

    def insert(self, key):
        new_node = RBNode(key, left=self.NIL, right=self.NIL)
        self._bst_insert(new_node)
        self._fix_insert(new_node)

    def delete(self, key):
        node_to_delete = self._find_node(key)
        if node_to_delete != self.NIL:
            self._delete_node(node_to_delete)

    def _bst_insert(self, z):
        y = None
        x = self.root
        while x != self.NIL:
            y = x
            if z.key < x.key:
                x = x.left
            else:
                x = x.right
        z.parent = y
        if y is None:
            self.root = z
        elif z.key < y.key:
            y.left = z
        else:
            y.right = z
        z.left = z.right = self.NIL

    def _find_node(self, key):
        current = self.root
        while current != self.NIL and key != current.key:
            if key < current.key:
                current = current.left
            else:
                current = current.right
        return current

    def _delete_node(self, z):
        y = z
        y_original_color = y.color
        if z.left == self.NIL:
            x = z.right
            self._transplant(z, z.right)
        elif z.right == self.NIL:
            x = z.left
            self._transplant(z, z.left)
        else:
            y = self._minimum(z.right)
            y_original_color = y.color
            x = y.right
            if y.parent == z:
                x.parent = y
            else:
                self._transplant(y, y.right)
                y.right = z.right
                y.right.parent = y
            self._transplant(z, y)
            y.left = z.left
            y.left.parent = y
            y.color = z.color
        if y_original_color == "BLACK":
            self._fix_delete(x)

    def _minimum(self, node):
        while node.left != self.NIL:
            node = node.left
        return node

    def _transplant(self, u, v):
        if u.parent is None:
            self.root = v
        elif u == u.parent.left:
            u.parent.left = v
        else:
            u.parent.right = v
        v.parent = u.parent

    def _rotate_left(self, x):
        y = x.right
        x.right = y.left
        if y.left != self.NIL:
            y.left.parent = x
        y.parent = x.parent
        if x.parent is None:
            self.root = y
        elif x == x.parent.left:
            x.parent.left = y
        else:
            x.parent.right = y
        y.left = x
        x.parent = y

    def _rotate_right(self, x):
        y = x.left
        x.left = y.right
        if y.right != self.NIL:
            y.right.parent = x
        y.parent = x.parent
        if x.parent is None:
            self.root = y
        elif x == x.parent.right:
            x.parent.right = y
        else:
            x.parent.left = y
        y.right = x
        x.parent = y

    def _fix_insert(self, k):
        while k != self.root and k.parent.color == "RED":
            if k.parent == k.parent.parent.left:
                u = k.parent.parent.right
                if u.color == "RED":
                    k.parent.color = "BLACK"
                    u.color = "BLACK"
                    k.parent.parent.color = "RED"
                    k = k.parent.parent
                else:
                    if k == k.parent.right:
                        k = k.parent
                        self._rotate_left(k)
                    k.parent.color = "BLACK"
                    k.parent.parent.color = "RED"
                    self._rotate_right(k.parent.parent)
            else:
                u = k.parent.parent.left
                if u.color == "RED":
                    k.parent.color = "BLACK"
                    u.color = "BLACK"
                    k.parent.parent.color = "RED"
                    k = k.parent.parent
                else:
                    if k == k.parent.left:
                        k = k.parent
                        self._rotate_right(k)
                    k.parent.color = "BLACK"
                    k.parent.parent.color = "RED"
                    self._rotate_left(k.parent.parent)
        self.root.color = "BLACK"

    def _fix_delete(self, x):
        while x != self.root and x != self.NIL and x.color == "BLACK":
            if x == x.parent.left:
                w = x.parent.right
                if w.color == "RED":
                    w.color = "BLACK"
                    x.parent.color = "RED"
                    self._rotate_left(x.parent)
                    w = x.parent.right
                if w.left.color == "BLACK" and w.right.color == "BLACK":
                    w.color = "RED"
                    x = x.parent
                else:
                    if w.right.color == "BLACK":
                        w.left.color = "BLACK"
                        w.color = "RED"
                        self._rotate_right(w)
                        w = x.parent.right
                    w.color = x.parent.color
                    x.parent.color = "BLACK"
                    w.right.color = "BLACK"
                    self._rotate_left(x.parent)
                    x = self.root
            else:
                w = x.parent.left
                if w.color == "RED":
                    w.color = "BLACK"
                    x.parent.color = "RED"
                    self._rotate_right(x.parent)
                    w = x.parent.left
                if w.right.color == "BLACK" and w.left.color == "BLACK":
                    w.color = "RED"
                    x = x.parent
                else:
                    if w.left.color == "BLACK":
                        w.right.color = "BLACK"
                        w.color = "RED"
                        self._rotate_left(w)
                        w = x.parent.left
                    w.color = x.parent.color
                    x.parent.color = "BLACK"
                    w.left.color = "BLACK"
                    self._rotate_right(x.parent)
                    x = self.root
        x.color = "BLACK"


def test_red_black_tree():
    # Test 1: Basic insertion
    rbt = RedBlackTree()
    rbt.insert(10)
    assert rbt.root.key == 10, "Test 1 Failed: Root should be 10"
    assert rbt.root.color == "BLACK", "Test 1 Failed: Root should be black"

    # Test 2: Insert multiple nodes
    rbt.insert(20)
    rbt.insert(30)
    rbt.insert(15)
    rbt.insert(5)
    assert rbt._find_node(20) != rbt.NIL, "Test 2 Failed: Node 20 should exist"
    assert rbt._find_node(15) != rbt.NIL, "Test 2 Failed: Node 15 should exist"

    # Test 3: Deletion of a leaf node
    rbt.delete(5)
    assert rbt._find_node(5) == rbt.NIL, "Test 3 Failed: Node 5 should not exist after deletion"

    # Test 4: Deletion of a node with one child
    rbt.delete(15)
    assert rbt._find_node(15) == rbt.NIL, "Test 4 Failed: Node 15 should not exist after deletion"

    # Test 5: Deletion of a node with two children
    rbt.insert(25)
    rbt.delete(20)
    assert rbt._find_node(20) == rbt.NIL, "Test 5 Failed: Node 20 should not exist after deletion"

    # Test 6: Tree properties
    def is_red_black_tree(node):
        # Helper to verify tree properties
        if node == rbt.NIL:
            return True, 1  # Black height is 1 for NIL nodes

        if node.color == "RED" and (node.left.color == "RED" or node.right.color == "RED"):
            return False, 0  # No two consecutive red nodes

        left_valid, left_black_height = is_red_black_tree(node.left)
        right_valid, right_black_height = is_red_black_tree(node.right)

        if left_black_height != right_black_height:
            return False, 0  # Black heights must match

        return left_valid and right_valid, left_black_height + (1 if node.color == "BLACK" else 0)

    is_valid, _ = is_red_black_tree(rbt.root)
    assert is_valid, "Test 6 Failed: Tree properties violated"

    print("All tests passed!")

test_red_black_tree()