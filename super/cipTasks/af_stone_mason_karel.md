# Stone Mason Karel

## My Code

```
from karel.stanfordkarel import *

def main():
    odds()
    even()
    odds()
    even()

def odds():
    turn_left()
    build_column()
    turn_right()
    move_four()

def even():
    turn_right()
    build_column()
    turn_left()
    if front_is_clear():
        move_four()

def build_column():
    for i in range(5):
        if front_is_clear():
            put_beeper()
            move()
        else:
            put_beeper()

def move_four():
    for i in range(4):
        move()

def turn_right():
    turn_left()
    turn_left()
    turn_left()

if __name__ == '__main__':
    main()
```

## The Result

<iframe src="https://codeinplace.stanford.edu/cip3/share/L6bxF5cARcPCJLoopUOI" width="100%" height="790px" frameBorder="0" style="border: 0;"></iframe><br>Brought to you by <a href="https://codeinplace.stanford.edu/" target="_blank">Stanford: Code In Place</a>
