class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self, ):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True
    
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end
    
    def delete(self, word):
        def _delete(node, depth):
            if not node:
                return False
            
            if depth == len(word):
                if node.is_end:
                    node.is_end = False
                    return not node.children
                return False
            
            char = word[depth]
            if char in node.children and _delete(node.children[char], depth + 1):
                del node.children[char]

                return not node.is_end and not node.children
            return False
        _delete(self.root, 0)


# Создаем экземпляр дерева
trie = Trie()

# Вставляем слова
trie.insert("apple")
trie.insert("app")
trie.insert("application")

# Проверяем наличие слов
print(trie.search("apple"))        # True
print(trie.search("app"))          # True\

# Удаляем слово
trie.delete("app")
print(trie.search("app"))          # False\

# Удаляем "apple"
trie.delete("apple")
print(trie.search("apple"))        # False\
# Удаляем "application"
trie.delete("application")