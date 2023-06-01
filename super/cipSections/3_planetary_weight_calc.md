# Planetary Weight Calculator

## My Code

```
def main():
    MERCURY = 0.376
    VENUS = 0.889
    MARS = 0.378
    JUPITER = 2.36
    SATURN = 1.081
    URANUS = 0.815
    NEPTUNE = 1.14

    weight = int(input("Enter a weight on Earth: "))
    planet = input("Enter a planet: ")

    if planet == "Mercury":
        planet_equiv = round(weight * MERCURY, 2)
        print(f"The equivalent weight on {planet}: {planet_equiv}")
    elif planet == "Venus":
        planet_equiv = round(weight * VENUS, 2)
        print(f"The equivalent weight on {planet}: {planet_equiv}")
    elif planet == "Mars":
        planet_equiv = round(weight * MARS, 2)
        print(f"The equivalent weight on {planet}: {planet_equiv}")
    elif planet == "Jupiter":
        planet_equiv = round(weight * JUPITER, 2)
        print(f"The equivalent weight on {planet}: {planet_equiv}")
    elif planet == "Saturn":
        planet_equiv = round(weight * SATURN, 2)
        print(f"The equivalent weight on {planet}: {planet_equiv}")
    elif planet == "Uranus":
        planet_equiv = round(weight * URANUS, 2)
        print(f"The equivalent weight on {planet}: {planet_equiv}")
    elif planet == "Neptune":
        planet_equiv = round(weight * NEPTUNE, 2)
        print(f"The equivalent weight on {planet}: {planet_equiv}")
    else:
        print("Not valid input")

if __name__ == "__main__":
    main()
```

## The Results

<iframe src="https://codeinplace.stanford.edu/cip3/share/iZl8KqDJSKLCAiRImDJo" width="100%" height="790px" frameBorder="0" style="border: 0;"></iframe><br>Brought to you by <a href="https://codeinplace.stanford.edu/" target="_blank">Stanford: Code In Place</a>
