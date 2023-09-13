noted : 21/06/23

# Analysis & Design of Algorithms

Unsolvable problem: no algorithm can be written to find the solution.  
Undecideable problem: no algorthm can be written to always give a correct true/false decision for every input value

## Problems solved by Algorithms

-   Routing - packets, shortest traveling route
-   Timetabling - aircraft, schools
-   Searching - information on the internet
-   Encrypting - communications so they arent hacked
-   Sorting - large amounts of data
-   Writing - compiler

## Properties of a good algorithm

-   clear and precise steps
-   produce correct ouput for any set of values
-   most (must always terminate)
-   should execute efficiently, in as few steps as possible
-   designed so others easily understand

### Efficientcy of an Algorithm

## Funtions

| Type        | Form |
| :---------- | :--- |
| Linear      |      |
| Quadratic   |      |
| Logarithmic |      |

## Linear Functions

A linear function: f(n) = an + b  
The order of magnitude for a linear function is written O(n) (note: O stands for Order)

## Quadratic Functions

A quadratic function: f(n) = an<sup>2</sup> + bn + c  
The order of magnitude is writte O(n<sup>2</sup>)

## Logarithmic Functions

f(n) = alog<sub>2</sub>n

## Big-O notation

A measure of the time complexity of an algorithm. an aproximation of the time it takes to execute an algorithm for a given number of items in a data set.

## Permutations

The number of ways the n items can be arranged.

| Type               | E.g.                                                                |
| :----------------- | :------------------------------------------------------------------ |
| Repetition allowed | combination lock with 4 digits 0 to 9                               |
| Not allowed        | 4 differently colored balls in a bag and you draw out one at a time |

## Premutations with repetition

10 digits (0 to 9) but only choose 2 digits

This problem is O(10<sup>n</sup>)

## Premutations with no repetition
