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

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you organize a superstar's songs, venues, and tour moments as ordered collections. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

A **multidimensional array** is an array of arrays. The most common use is a **2D array** (matrix) to represent tabular data.

## Creating a 2D array

```javascript
const seats = [["A1", "A2"], ["B1", "B2"]];
console.log(seats[1][0]);
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

1. Write a function `matrixSum(matrix)` that returns the sum of **all** elements.
2. Write a function `diagonal(matrix)` that returns an array of the **main diagonal** elements (top-left to bottom-right).
3. log with `console.log()`: `"Sum: 45 | Diagonal: 1,5,9"`.
4. Verify the program behavior: diagonal returns main diagonal elements.
5. Verify the program behavior: logs the mission result.
