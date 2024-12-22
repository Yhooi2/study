def prefix_function(s):
    n = len(s)
    p = [0] * n  # массив для значений префикс-функции
    
    for i in range(1, n):
        # начинаем с предыдущего значения префикс-функции
        j = p[i-1]
        
        # пока не нашли подходящий префикс
        while j > 0 and s[i] != s[j]:
            j = p[j-1]
            
        # если символы совпали, увеличиваем длину
        if s[i] == s[j]:
            j += 1
            
        p[i] = j
        
    return p

# Пример использования
s = "abcabcd"
print(f"Строка: {' '.join(s)}")
print(f"Индекс: {' '.join(str(i) for i in range(len(s)))}")
print(f"П-функ: {' '.join(str(x) for x in prefix_function(s))}")

# Вывод:
# Строка: a b c a b c d
# Индекс: 0 1 2 3 4 5 6
# П-функ: 0 0 0 1 2 3 0