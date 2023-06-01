# Jigsaw Karel

## My Code

```
from karel.stanfordkarel import *

def main():
    first()
    placePiece()
    remit()

def first():
    move()
    move()
    pick_beeper()

def placePiece():
    move()
    turn_left()
    move()
    move()
    put_beeper()

def remit():
    turn_left()
    turn_left()
    move()
    move()
    turn_right()
    move()
    move()
    move()
    turn_left()
    turn_left()

def turn_right():
    for i in range(3):
        turn_left()

if __name__ == '__main__':
    main()
```

## The Result

<iframe src="https://codeinplace.stanford.edu/cip3/share/kQ3Z086nHgctfWcMu5PD" width="100%" height="790px" frameBorder="0" style="border: 0;"></iframe><br>Brought to you by <a href="https://codeinplace.stanford.edu/" target="_blank">Stanford: Code In Place</a>
