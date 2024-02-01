s = input()
count = 0
total = 0
a = 0
e = 0
ii = 0
o = 0
u = 0

for i in s:
     
     total += 1
     if i == 'a':
         a += 1
         count += 1
     if i == 'e':
         e += 1
         count += 1
     if i == 'i':
         ii += 1
         count += 1
     if i == 'o':
         o += 1
         count += 1
     if i == 'u':
         u += 1
         count += 1
if a == 0 or e == 0 or ii == 0 or o == 0 or u== 0:
    print('False')
else:
    print ("Total viwels:", count, "Total consonants:", total - count)
    print ('a =', a, 'e =', e, 'i =', ii, 'o =', o, 'u = ', u)
