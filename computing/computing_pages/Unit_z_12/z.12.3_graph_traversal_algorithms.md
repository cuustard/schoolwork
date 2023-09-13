noted : 12/09/23

# Graph Traversal Algorithms

There are 2 ways of traversing a graph:

|Term| Def|
|:--|:--|
|Depth-first|go as far as you can down a path before backtracking and going down the next path|
|breadth-first|explore all neighbours of current vertex, then the neighbours of each of those verticies|

## Depth first

Depth first algorithms use a stack to keep track of the last node visited, and a list to hold the names of nodes that have been visited.  
  
Has several applications:

- Job-scheduling
- Finding path between 2 verticies
- Soling pzzels such as navigating a maze

## Breadth first

Breadth first 