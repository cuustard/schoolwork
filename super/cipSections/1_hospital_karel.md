# Hospital Karel

## My Code

```
from karel.stanfordkarel import *

def main():
    while front_is_clear():
        if beepers_present():
            build_hospital()
        else:
            move()

def build_hospital():
    turn_left()
    for i in range(2):
        move()
        put_beeper()
    turn_right()
    move()
    turn_right()
    for i in range(2):
        put_beeper()
        move()
    turn_left()
    put_beeper()
    if front_is_clear():
        move()

def turn_right():
    for i in range(3):
        turn_left()

if __name__ == '__main__':
    main()
```

## The Result

<iframe src="https://codeinplace.stanford.edu/cip3/share/1GUFU0JSy28fLzbl01vm" width="100%" height="790px" frameBorder="0" style="border: 0;"></iframe><br>Brought to you by <a href="https://codeinplace.stanford.edu/" target="_blank">Stanford: Code In Place</a>
