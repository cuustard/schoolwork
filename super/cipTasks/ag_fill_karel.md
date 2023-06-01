# Fill Karel

## My Code

```
from karel.stanfordkarel import *

def main():
    while front_is_clear():
        complete_row()
        go_back()
        if front_is_blocked():
            turn_right()
            while front_is_clear():
                move()
        else:
            set_up()

def complete_row():
    while front_is_clear():
        put_beeper()
        move()
    put_beeper()

def go_back():
    turn_around()
    while front_is_clear():
        move()
    turn_right()

def set_up():
    move()
    turn_right()

def turn_around():
    for i in range(2):
        turn_left()

def turn_right():
    for i in range(3):
        turn_left()

if __name__ == '__main__':
    main()
```

## The Result

<iframe src="https://codeinplace.stanford.edu/cip3/share/Yzg2ZCbaKoOfM4IBAhx8" width="100%" height="790px" frameBorder="0" style="border: 0;"></iframe><br>Brought to you by <a href="https://codeinplace.stanford.edu/" target="_blank">Stanford: Code In Place</a>
