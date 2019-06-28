"use strict";

const invalidBoard = [
  [5, 3, 4, 6, 7, 9, 8, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 7],
  [6, 9, 8, 3, 4, 2, 7, 6, 5],

  [8, 5, 9, 7, 6, 1, 4, 2, 1],
  [4, 2, 6, 8, 5, 3, 7, 8, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const validBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],

  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

// Polyfill---
// Object.values = function(accObj) {
//   return Object.keys(accObj)
//     .map(key => accObj[key])
//     .filter(el => typeof el === "number" && el != Number.Nan);
// };
// ---

console.log("Invalid board is invalid: " + !isValid(invalidBoard));
console.log("Valid board is valid: " + isValid(validBoard));

// Rules
// - Each row must contain the numbers 1 through 9 with no repetitions.
// - Each column must contain the numbers 1 through 9 with no repetitions.
// - Each 3x3 block must contain the numbers 1 through 9 with no repetitions.

// Assumption
// Only 9 numbers in a row

function isGroupValid(group) {
  return new Set(group.filter(n => n >= 1 && n <= 9)).size === 9;
}

function isValid(board) {
  let isValid = true;

  const rowValid = () => {
    for (let i = 0; i < 9; i++) {
      if (isGroupValid(board[i]) === false) isValid = false;
    }
  };

  const columnValid = () => {
    for (let c = 0; c < 9; c++) {
      const array = [];
      for (let r = 0; r < 9; r++) {
        array.push(board[r][c]);
      }
      if (isGroupValid(array) === false) isValid = false;
    }
  };

  const boxValid = () => {
    for (let c = 0; c < 3; c++) {
      for (let r = 0; r < 3; r++) {
        const array = [];
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            array.push(board[r * 3 + i][c * 3 + j]);
          }
        }
        if (isGroupValid(array) === false) isValid = false;
      }
    }
  };

  rowValid();
  columnValid();
  boxValid();
  return isValid;
}
