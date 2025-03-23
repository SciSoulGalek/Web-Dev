a = int(input())

for i in range(1, int(a / 2) + 1):
    if a % i == 0:
        print(i, end = " ")

print(a)