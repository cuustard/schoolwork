# Heads Up

## My Code

```
import random

FILE_NAME = 'cswords.txt'

def get_words_from_file():
    f = open(FILE_NAME)
    lines = []
    for line in f:
        line = line.strip() 
        if line != "":
            lines.append(line)
    return lines

def main():
    while True:
        print(random.choice(get_words_from_file()))
        idek = input()

if __name__ == '__main__':
    main()
```

## The Result

<iframe src="https://codeinplace.stanford.edu/cip3/share/7j8euxeSolw8mNaCum1E" width="100%" height="790px" frameBorder="0" style="border: 0;"></iframe><br>Brought to you by <a href="https://codeinplace.stanford.edu/" target="_blank">Stanford: Code In Place</a>