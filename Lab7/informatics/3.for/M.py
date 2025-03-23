num = int(input())
sum = 0

for i in range(num):
    x = int(input())
    for j in str(x):
        if j == "0":
            sum += 1

print(sum)