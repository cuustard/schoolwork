# Piles

## The Code

```
from karel.stanfordkarel import *

def main():
    pick_10()


def pick_10():
    move()
    for n in range(3):
        for i in range(10):
            pick_beeper()
        move()
        if front_is_clear():
            move()

if __name__ == '__main__':
    main()
```

## The Outcome

<iframe src="https://codeinplace.stanford.edu/cip3/share/ONQrzvwkpnJfaAetjrIi" width="100%" height="790px" frameBorder="0" style="border: 0;"></iframe><br>Brought to you by <a href="https://codeinplace.stanford.edu/" target="_blank">Stanford: Code In Place</a>
