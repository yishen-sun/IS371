array = [i for i in range(1,8)]
print(array)

arr1 = array[0::-1]
print(arr1)
arr2 = array[:0:-1]
print(arr2)
arr3 = array[-1::-1]
print(arr3)
arr4 = array[len(array) - 2::-1]
print(arr4)
arr5 = array[len(array) - 1: - len(array):-1]
print(arr5)