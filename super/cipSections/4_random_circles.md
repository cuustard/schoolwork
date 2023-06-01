# Random Circles

## My Code

```
from graphics import Canvas
import random

CANVAS_WIDTH = 300
CANVAS_HEIGHT = 300
CIRCLE_SIZE = 20
N_CIRCLES = 20

def main():
    print('Random Circles')
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    for i in range(0, random.randint(1,random.randint(0,20))):
        create_circles(canvas)

def create_circles(canvas):
    MAX_SIZE = 50
    size = random.randint(0,MAX_SIZE)
    left_x = random.randint(0,CANVAS_WIDTH - MAX_SIZE)
    top_y = random.randint(0,CANVAS_HEIGHT - MAX_SIZE)
    right_x = left_x + size
    bottom_y = top_y + size
    canvas.create_oval(left_x, top_y, right_x, bottom_y, random_color())

def random_color():
    colors = ['blue', 'purple', 'salmon', 'lightblue', 'cyan', 'forestgreen']
    return random.choice(colors)

if __name__ == '__main__':
    main()
```

## The Results

<iframe src="https://codeinplace.stanford.edu/cip3/share/IQ3GweANJSMLGF6OY9gp" width="100%" height="790px" frameBorder="0" style="border: 0;"></iframe><br>Brought to you by <a href="https://codeinplace.stanford.edu/" target="_blank">Stanford: Code In Place</a>
