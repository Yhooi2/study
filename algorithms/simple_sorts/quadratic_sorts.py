
def insert_sort(A):
    """ sort lists A by insert """
    N = len(A)
    for top in range(1, N):
        k = top
        while  k > 0 and A[k-1] > A[k]:
        #for k in range(i, -1, -1)
            A[k], A[k-1] = A[k-1], A[k]
            k -= 1

def choice_sort(A):
    """ sort lists A by choice """
    N = len(A)
    for i in range(N):
        fl = False
        for j in range(i, N):
            if A[i] > A[j]:
                A[i], A[j] = A[j], A[i]

def bubble_sort(A):
    """ sort lists A by bubble """
    N = len(A)
    for bypass in range(1, N):
        fl = True
        for i in range(N - bypass):
            if A[i] > A[i+1]:
                A[i], A[i+1] = A[i+1], A[i]
                fl = False
        if fl:
            break


#########################################
# test
def test_sort(sort_algorithm):
    print("test: ", sort_algorithm.__doc__)
    print("testcase #1:" , end="")
    A = [4, 2, 5, 1, 3]
    A_sorted = [ 1, 2, 3, 4, 5]
    sort_algorithm(A)
    print( 'Ok' if A == A_sorted else 'Fail')
    
    print("testcase #2:" , end="")
    A = list(range(10, 20)) + list(range(0, 10))
    A_sorted = list(range(20))
    sort_algorithm(A)
    print( 'Ok' if A == A_sorted else 'Fail')
    
    print("testcase #3:" , end="")
    A = [4, 2, 4, 2, 3]
    A_sorted = [ 2, 2, 3, 4, 4]
    sort_algorithm(A)
    print( 'Ok' if A == A_sorted else 'Fail')
    


test_sort(insert_sort)
test_sort(choice_sort)
test_sort(bubble_sort)

