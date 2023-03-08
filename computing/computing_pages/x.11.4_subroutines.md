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
An arguments is the value that is passed into the subroutine via that variable.

## Passing by value

In languages such as python, arguments are passed by value.  
This means that the value of the argument in the calling statement is copied to the variable parameter in the subroutine.

    #define procedure
    procedure multiply(x, y)
        z = x * y
        print(z)
    endprocedure

    #calling procedure
    num1 = 10
    num2 = 5
    multiply(num1, num2)

In this example, the arguments in the calling statement (10 and 5) are copied to the variables in the paramter in the subroutine (x and y).

## Passing by reference

By reference means that the address of the argument in the calling statement is passed to the parameter, rather than the actual value being copied.  
This means that calculations performed on that parameter in the subroutine will change the value of the correspongind argument in the calling routine.

## Variable Scope

Values can be accessed when a variable is in a scope

### Local and Global Variables

Subroutines can have their own variables. These are called local variables and can only be used inside the subroutine.  
Global variables are defined in the main program and can therefore be passed as an argument into any subroutine.

### Scope of Variables
The scope of a local varialbe is the subroutine in which it is declared.  
So in the aove example, the variable 'z''s scope is the subroutine 'multiply'.

### Advantages of Local Variables
As the variables are local to a subroutine, they can be implemented into other programs.  
Furthermore, you can't accidentally change a variable in the main program that is used in a subroutine.

## Modular Programming
Means breaking down major tasks into smaller sub-tasks.  Each sub-tasks may be further broken down until each 'module' performs a single function.

### Advantages of modular programming
- Programs are more easily and quickly written.  
- Large programs are broken down into sub-tasks that are easiekr to manage and program.  
- Each module can be individually tested.
- Modules can be re-used in a program
- Large programs are easier to debig and maintain
