noted : 20/03/2023

# Recursion

## Factorial Recursion

```
n! = n x (n-1)!
```

## How does it work?

Each time a subroutine is called, the return address, parameter and local variables, are pushed onto the stack.  

## Essential characteristics

3 essential characteristics:

- a stopping condition included which when met means that the routine will not call itself and will 'unwind'
- the routine must call itself
- the stopping condition must be reach after a finite number of calls

## Stack overflow

The stopping condition is required otherwise the routine never 'unwinds'.

## The use of the call stack

The return address is put onto the call stack each time a routine is called.  
The recursive routine can only be called a certain number of times before the stack overflows, even with a stopping condition.

### limitations of iteration

reach memory limitations but no stack overflow.  

## summing a list of numbers

````
numbers = [3, 6, 2, 8, 1]
total = 0
for i in range(len(numbers)):
     total += numbers[i]
````

## REcursive vs iterative

recursve more likely to give stack overflow.  
recursive less lines of code.  
iteration easier to follow.  
______ executes faster.