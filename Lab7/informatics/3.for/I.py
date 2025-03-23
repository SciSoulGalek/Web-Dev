a = int(input())
num = 1

for i in range(1, int(a / 2) + 1):
    if a % i == 0:
        num += 1

print(num)