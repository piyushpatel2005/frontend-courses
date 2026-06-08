---
title: Multidimensional Arrays
slug: multidimensional-arrays
order: 5
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Access elements with two indices: `matrix[row][col]`."
  - "Use nested for loops to iterate all rows and columns."
  - "The diagonal elements have the same row and column index: `matrix[i][i]`."
---

# Multidimensional Arrays

A **multidimensional array** is an array of arrays. The most common use is a **2D array** (matrix) to represent tabular data.

## Creating a 2D array

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

## Accessing elements

```javascript
matrix[0][0]; // 1 — row 0, col 0
matrix[1][2]; // 6 — row 1, col 2
matrix[2][1]; // 8 — row 2, col 1
```

## Iterating with nested loops

```javascript
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(matrix[row][col]);
    }
}
```

## Your Task

Given this 3×3 matrix:

```javascript
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

1. Write a function `matrixSum(matrix)` that returns the sum of **all** elements.
2. Write a function `diagonal(matrix)` that returns an array of the **main diagonal** elements (top-left to bottom-right).
3. Display in `#output`: `"Sum: 45 | Diagonal: 1,5,9"`.
