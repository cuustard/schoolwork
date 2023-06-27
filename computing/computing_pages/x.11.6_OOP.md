noted : 03/05/2023

# Object Oriented Programming

bundle data and mehods to put them into library so we can import later.  
Benefits:

-   Modular
-   pluggable,
-   protected
-   reusable
-   faster dev

## CLasses

A class is a blueprint for an object.  
It defines what an object in the class wil look like (it's properties) and what it can do (attributes).  
A class may implement an abstract data type such as an array or fraction, or a more concrete object such as a person or car.

## Attributes and Methods

A class defines the attributes (properties) and methods(functions).

| Class | Attributes         | Methods   |
| :---- | :----------------- | :-------- |
| Car   | color speed weight | brake go  |
| dog   | color size cost    | bark jump |

### Abstract diagram of a class

| class      |
| :--------- |
| attributes |
| methods    |

## Public and Private

Attributes are normally private.  
Methods are normally public.

This is to ensure that the attributes cannot be changed execpt by executing a method.

## Encapsulation and Data Hiding

Encapsulation wraps the attributes and methods in the class definition, hiding details from user.  
EG in python, to sort a list of names you cant wrte names.sort(). but you do not know how it actually sorts.

## Creating a new object

By defining an object you have created the blueprint for it. But you have not instantiated it.

## Setters and getters

We need to set or find value of attributes.

# Summary

| Term          | Definition                                                    |
| :------------ | :------------------------------------------------------------ |
| Class         | Template for object which defines it's attributes and methods |
| Object        | An instance of a class                                        |
| Constructor   | The method used to create a new object in a class             |
| Instantiation | Crearting an instance of an objecet                           |

## Inheritance

in OOP you can define a child class which inherits the attributes and methods of the parent class.  
EG 'pet' class, with children of cat and dog. Each child class can then have more unique attributes and methods.

```
Class Puppy inherits Dog
    private shoesChewed
    shoesChewed = 0
```

### A puppy constructor

```
Class Puppy inherits Dog
    private showsChewed= 0
    public procedure new (myName, myColour, myDob)
        super.new(myName, myColour)
        dob = myDob
```

## Polymorphism

Polymorphism is when objects are processed differently depending on their class.  
EG may have same methods but different data so output is differet.

## Advantages of OOP

| Advantage                             | explain                                                                             |
| :------------------------------------ | :---------------------------------------------------------------------------------- |
| Code reuse                            | classes created in 1 program can be saved in a library and reused in other programs |
| Encapsulation reduces code complexity | hidden from user so they dont change it accidentally                                |
| Software maintenance                  | Object oriented prorams are easier to modify and maintain                           |
