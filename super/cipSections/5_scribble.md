# Scribble

## My Code

```
from graphics import Canvas
import time
import random

CANVAS_WIDTH = 300
CANVAS_HEIGHT = 300
CIRCLE_SIZE = 20
DELAY = 0.01

def main():
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    while True:
        mouse_x = canvas.get_mouse_x()
        mouse_y = canvas.get_mouse_y()
        if mouse_x > 0 or mouse_y > 0:
            left_x = mouse_x
            top_y = mouse_y
            right_x = left_x + CIRCLE_SIZE
            bottom_y = top_y + CIRCLE_SIZE
            canvas.create_oval(left_x-10, top_y-10, right_x, bottom_y)
        time.sleep(DELAY)

if __name__ == "__main__":
    main()
```

## The Result

<iframe src="https://codeinplace.stanford.edu/cip3/share/qlXNGsJpO0H6eZ3knEXy" width="100%" height="790px" frameBorder="0" style="border: 0;"></iframe><br>Brought to you by <a href="https://codeinplace.stanford.edu/" target="_blank">Stanford: Code In Place</a>
