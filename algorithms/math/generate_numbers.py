
def generate_numbers(base, size, prefix=""):
    """gererate all combinations of numbers in 
       a given n-numeric system(base <= 10)"""
    if size == 0:
        print(prefix)
        return
    for n in range(base):
        generate_numbers(base, size-1, prefix+str(n))

base, size = map(int, input().split())
generate_numbers(base, size)

