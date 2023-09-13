noted : 3/7/23

# Searching Algorithms

## Linear Search

Worst case scenario would be to look at each card.  
The time complexity is n(O).  
IF there are n names in a list, the average number of names that will have to be examined is n/2.

Used for sorted/unsorted list.

```
function linearSearch(nameList, nameSought):
    index = -1
    i = 0
    found = False
    while i < LEN(namelist) AND NOT found:
        if namelist[i] == nameSought then:
            index = i
            found = True
        endif
        i += 1
    endwhile
    return index
endfunction
```

## Binary Search

Used for sorted list.
