# Khansole Academy

## My Code

```
import random

def main():
    print("Khansole Academy")
    num1 = random.randint(10, 99)
    num2 = random.randint(10, 99)

    print(f"What is {num1} + {num2}?")
    user_ans = int(input("Your answer: "))

    if user_ans == num1 + num2:
        print("Correct!")
    else:
        print("Incorrect.")
        print(f"The expected answer is {num1 + num2}")

if __name__ == '__main__':
    main()
```

## The Results

<iframe src="https://codeinplace.stanford.edu/cip3/share/iYzEgNfAm4CjREiKwX3T" width="100%" height="790px" frameBorder="0" style="border: 0;"></iframe><br>Brought to you by <a href="https://codeinplace.stanford.edu/" target="_blank">Stanford: Code In Place</a>
