def knapsack(weights, values, capacity):
    
    cache = {}
    def solve(mask, remain):
        if mask == 0:
            return 0
        if (mask, remain) in cache:
            return cache[(mask, remain)]

        best = 0
        for i in range(n):
            if mask &(1 << i):
                weight = weights[i]
                if weight <= remain:
                    current = solve(mask & ~(1 << i), remain - weight)
                    best = max(best, current + values[i])

        cache[(mask, remain)] = best
        return best

    n = len(weights)
    return solve((1 << n) - 1, capacity)

wights = [2, 3, 4, 5]
values = [3, 4, 5, 6]
capacity = 10

result = knapsack(wights, values, capacity)
print(result)
