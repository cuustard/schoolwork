noted : 01/03/2023

# Iteration
means repitition. 

loops:
- while
- do until
- try until

## for... next loop

for index = 1 to 8
    x = (index ** 2) mod 3
    print(x)
next index


|   |  x  |
|---|-----|
| 1 |  1  |
| 2 |  1  |
| 3 |  0  |
| 4 |  1  |
| 5 |  1  |
| 6 |  0  |
| 7 |  1  |

for index = 1 to 8 step 2
    x = (index ** 2) mod 3
    print(x)
next 

|   |  x  |
|---|-----|
| 1 |  1  |
| 3 |  0  |
| 5 |  1  |
| 7 |  1  |
| 9 |  0  |

for index = 1 to 8 step 2
    x = (index ** 2) mod 3
    print(x)
next 

|   |  x  |
|---|-----|
| 15|  7  |
| 12|  6  |
| 9 |  4  |
| 6 |  3  |
| 3 |  1  |

### while... endwhile
