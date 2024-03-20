def any7(nums):
    i=7
    if i in nums:
        return ("yes")
    else:
        return("false")

print("should be true", any7([1, 2, 7, 4, 5]))
print("should be false", any7([1, 2, 4, 5]))

