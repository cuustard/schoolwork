noted : 08/03/2023

# Subroutines

A subroutine is a set of instructions that can be called (re-used) whenever needed.  
So in a program, as the code is executed line by line, as it reaches a line that calls a subroutine, it 'jumps' to the subroutine, completes it, then jumps back to the main program code.  
  
There are 2 types of subroutines. Procedures and functions.  
A function returns value(s).

### Built-in functions
Programming languages have built in functions to perform common tasks.  

### Library subroutines
Programming languages have libraries of pre-defined subroutines.  
To access subroutines in a library, the library must be imported at the begining of the program.

## Passing Arguments
Arguments in parentheses are used to pass data to a subroutine.

### Parameters and Arguments
A parameter is the variable that is declaed in a subroutine.  
An arguments is the value that is passed into the subroutine via that variables.

## Passing by value
In languages such as python, arguments are passed by value.  
This means that the value of the argument in the calling statement is copied to the variable parameter in the subroutine.

    print("Hello")
    for i in range(0, 10):
        print("Tom stinks")

like that