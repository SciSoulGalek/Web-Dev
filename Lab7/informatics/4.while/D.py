num = int(input())
deg = False

i = 1
while i <= num:
    if num == i:
        deg = True
        break
    i *= 2

if deg:
    print("YES")
else:
    print("NO")