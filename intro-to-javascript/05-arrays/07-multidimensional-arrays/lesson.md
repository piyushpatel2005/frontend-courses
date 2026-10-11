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
summary: "A seating chart has rows and columns. An array can contain other arrays; `matrix[row][column]` reads the outer row first, then a value inside that row."
seo_title: Multidimensional Arrays | Introduction to JavaScript
seo_description: "A seating chart has rows and columns. An array can contain other arrays; `matrix[row][column]` reads the outer row first, then a value inside that row."
seo_keywords: javascript, multidimensional arrays, beginner javascript, programming practice
---

# Multidimensional arrays

A seating chart has rows and columns. An array can contain other arrays; `matrix[row][column]` reads the outer row first, then a value inside that row.

```javascript run
const seats = [["A1", "A2"], ["B1", "B2"]];
console.log(seats[1]);
console.log(seats[1][0]);
for (const row of seats) {
  for (const seat of row) console.log(seat);
}
```

Run the block. The first line is the second row; the next line selects its first seat. The outer loop visits rows and the inner loop visits each row's values. Rows need not have equal lengths, so using each row's own values avoids assuming a rectangular shape.

For a square grid, the **main diagonal** runs from top left to bottom right. Its row and column indices match: `[0][0]`, `[1][1]`, and so on. Build a result array and push one diagonal value per row. An empty grid contributes no values and should return an empty diagonal.

Your sum helper accepts any array of numeric rows; the diagonal helper receives square grids only.

## Your Tasks

1. Implement `matrixSum(matrix)` with nested loops to total every number, including in different-sized or empty grids.
2. Implement `diagonal(matrix)` to return the main diagonal of a square grid: take `matrix[i][i]` for each row index.
3. Log `Sum: 45 | Diagonal: 1,5,9` using both helpers with `grid`.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
