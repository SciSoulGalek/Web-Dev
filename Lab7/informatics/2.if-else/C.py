num = str(input())
check = int(input())
test = False

if num == num[::-1] and len(num) == 4:
    test = True

if (test and check == 1) or (not test and check != 1):
    print("YES")
else:
    print("NO")