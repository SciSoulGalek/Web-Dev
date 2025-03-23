bin = input()
dec = 0

for digit in bin:
    dec = dec * 2 + int(digit)
    print(dec)

print(dec)
