// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes,
// which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(log n)

function countZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!!!

  let min = 0;
  let max = arr.length - 1;
  let middle;

  while (min < max) {
    middle = Math.floor((min + max) / 2);
    if (arr[middle] === 1) {
      min = middle + 1;
    } else {
      max = middle;
    }
  }
  if (arr[max] === 1) return 0;
  return arr.length - max;
}
