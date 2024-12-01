import timeit
import dis
import sys
import dis

# Отключение оптимизаций интерпретатора
sys.flags.optimize = 0

def fast_exp_shift(base, exp, mod):
    res = 1
    base %= mod
    while exp:
        if exp & 1:
            res = (res * base) % mod
            exp -= 1
        else:
            base = (base * base) % mod
            exp >>= 1  # Битовый сдвиг
    return res

def fast_exp_div(base, exp, mod):
    res = 1
    base %= mod
    while exp:
        if exp & 1:
            res = (res * base) % mod
            exp -= 1
        else:
            base = (base * base) % mod
            exp //= 2  # Целочисленное деление
    return res

def performance_test():
    # Параметры для теста
    base = 2
    mod = 1000000007
    exp = 10**15

    # Проверка корректности результатов
    shift_result = fast_exp_shift(base, exp, mod)
    div_result = fast_exp_div(base, exp, mod)
    
    print(f"Результаты вычислений:")
    print(f"Битовый сдвиг:   {shift_result}")
    print(f"Целочисленное деление: {div_result}")
    
    if shift_result != div_result:
        print("ОШИБКА: Результаты не совпадают!")
        return

    # Замер времени с максимально подробной информацией
    print("\nАнализ производительности:")
    
    # Функция для замера с принудительным запуском
    def measure_performance(func):
        total_time = 0
        iterations = 10
        for _ in range(iterations):
            start_time = timeit.default_timer()
            result = func(base, exp, mod)
            end_time = timeit.default_timer()
            total_time += end_time - start_time
        return total_time / iterations

    # Замеры времени
    shift_time = measure_performance(fast_exp_shift)
    div_time = measure_performance(fast_exp_div)
    
    print(f"Время битового сдвига:   {shift_time:.6f} сек")
    print(f"Время целочисленного деления: {div_time:.6f} сек")
    print(f"Разница: {abs(shift_time - div_time):.6f} сек")

    # Вывод байт-кода для дополнительного анализа
    print("\nБайт-код функции битового сдвига:")
    dis.dis(fast_exp_shift)
    print("\nБайт-код функции целочисленного деления:")
    dis.dis(fast_exp_div)

if __name__ == "__main__":
    # Дополнительные способы отключения оптимизаций
    import gc
    gc.disable()  # Отключение сборщика мусора

    performance_test()
    
    gc.enable()  # Обратное включение сборщика мусора