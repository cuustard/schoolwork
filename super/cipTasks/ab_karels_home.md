# Karel's Home

## The Code

```
from karel.stanfordkarel import *

def main():
    move()
    # add your code here
    move_out_house()
    pick_beeper()
    move_back()

def move_out_house():
    move()
    turn_right()
    move()
    turn_left()
    move()

def turn_right():
    turn_left()
    turn_left()
    turn_left()

def move_back():
    turn_around()
    move()
    move()
    move()
    turn_right()
    move()
    turn_right()

def turn_around():
    turn_left()
    turn_left()

if __name__ == '__main__':
    main()
```

## The Result

<iframe src="https://codeinplace.stanford.edu/cip3/share/CqlmIQP2CGhMHEHV3Qsn" width="100%" height="790px" frameBorder="0" style="border: 0;"></iframe><br>Brought to you by <a href="https://codeinplace.stanford.edu/" target="_blank">Stanford: Code In Place</a>
