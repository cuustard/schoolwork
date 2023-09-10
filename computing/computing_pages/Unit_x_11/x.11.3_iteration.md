noted : 01/03/2023

# Iteration

Iteration is repetition.  
The same sequence of instructions can be made to repeate multiple times. This is more efficient that writing that sequence out many times.  
There are 3 iterative loops:

| Loop     | Type                 |
| :------- | :------------------- |
| while    | condition controlled |
| do until | condition controlled |
| for      | count controlled     |

## while... endwhile loop

The condition is tested at the begining of the loop. This means that if the condition changes during the iteration of the loop, then it keeps going until completion of that iteration, and then checks the loop before either starting again, or continuing past the loop.

## do... until loop

The statemetns in the loop are executed before the condition is checked. This means that the statements in the loop will always be executed at least once.

## for... next loop

Used to iterative statements a set number of times.

---

```
for index = 1 to 8
    x = (index ** 2) mod 3
    print(x)
next index
```

| index | x   |
| ----- | --- |
| 1     | 1   |
| 2     | 1   |
| 3     | 0   |
| 4     | 1   |
| 5     | 1   |
| 6     | 0   |
| 7     | 1   |

---

```
for index = 1 to 8 step 2
    x = (index ** 2) mod 3
    print(x)
next
```

| index | x   |
| ----- | --- |
| 1     | 1   |
| 3     | 0   |
| 5     | 1   |
| 7     | 1   |
| 9     | 0   |

---

```
for index = 1 to 8 step 2
    x = (index ** 2) mod 3
    print(x)
next
```

| index | x   |
| ----- | --- |
| 15    | 7   |
| 12    | 6   |
| 9     | 4   |
| 6     | 3   |
| 3     | 1   |

---
