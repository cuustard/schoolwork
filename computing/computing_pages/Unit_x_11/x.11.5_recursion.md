noted : 20/03/2023

# Recursion

## Factorial Recursion

```
n! = n x (n-1)!
```

The routine:

```
procedure calc(n)
     if n == 0 then
          factorial <-- 1
     else
          factorial <-- n * calc(n - 1)
     return(factorial)
endprocedure
```

Trace Table:

```
n <-- 6

OUTPUT calc(6)
```

| n   | n == 0 | factorial    | print |
| :-- | :----- | :----------- | :---- |
| 6   | False  | 6 \* calc(5) |       |
| 5   |        | 5 \* calc(4) |       |
| 4   |        | 4 \* calc(3) |       |
| 3   |        | 3 \* calc(2) |       |
| 2   |        | 2 \* calc(1) |       |
| 1   |        | 1 \* calc(0) |       |
| 0   | True   | 1            |       |
| 1   | False  | 1 \* 1       |       |
| 2   |        | 2 \* 1       |       |
| 3   |        | 3 \* 2       |       |
| 4   |        | 4 \* 6       |       |
| 5   |        | 5 \* 24      |       |
| 6   |        | 6 \* 120     | 720   |

Each time the subroutine is called, the return address, parameter and local variables, are pushed onto the stack.

## Essential characteristics

3 essential characteristics:

-   a stopping condition which ensures that a routine will not call itself and will instead 'unwind'
-   the routine must call itself
-   the stopping condition must be reach after a finite number of calls

## Stack overflow

The stopping condition is required otherwise the routine never 'unwinds'.

## The use of the call stack

The return address is put onto the call stack each time a routine is called.  
The recursive routine can only be called a certain number of times before the stack overflows, even with a stopping condition.

### limitations of iteration

reach memory limitations but no stack overflow.

## summing a list of numbers

```
numbers = [3, 6, 2, 8, 1]
total = 0
for i in range(len(numbers)):
     total += numbers[i]
```

## Recursive vs iterative

recursve more likely to give stack overflow.  
recursive less lines of code.  
iteration easier to follow.  
 executes faster.
