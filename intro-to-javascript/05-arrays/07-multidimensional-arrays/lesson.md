---
title: Multidimensional Arrays
slug: multidimensional-arrays
order: 7
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Access elements with two indices: `matrix[row][col]`."
  - "Use nested for loops to iterate all rows and columns."
  - "The diagonal elements have the same row and column index: `matrix[i][i]`."
summary: Practice multidimensional arrays with a focused Starline Awards programming mission.
seo_title: Multidimensional Arrays | Introduction to JavaScript
seo_description: Learn multidimensional arrays through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, multidimensional arrays, beginner javascript, programming practice
---

# Multidimensional Arrays

## Mission: Setlist Vault

A seating chart has rows and columns, not just one list. Read nested arrays and total their values in `script.js`; check the Console.

A **multidimensional array** is an array of arrays. The most common use is a **2D array** (matrix) to represent tabular data.

## Creating a 2D array

```javascript
const seats = [["A1", "A2"], ["B1", "B2"]];
console.log(seats[1][0]);
```

## Accessing elements

The first index chooses a row and the second chooses a column:

```javascript
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
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

1. Write `matrixSum(matrix)` to sum **all** values, even when given a different-sized grid.
2. Write `diagonal(matrix)` to return the **main diagonal** (top-left to bottom-right).
3. Log `Sum: 45 | Diagonal: 1,5,9` on its own line in the Console.
