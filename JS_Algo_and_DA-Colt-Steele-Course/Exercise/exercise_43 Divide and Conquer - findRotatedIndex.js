// Divide and Conquer - findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer.
// The function should return the index of the integer in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity - O(log n)

// Space Complexity - O(1)

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
// findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5

function findPivotIndex(arr) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[middle - 1] > arr[middle]) {
      return middle;
    } else if (arr[middle] > arr[right]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return -1;
}

function findRotatedIndex(arr, target) {
  // add whatever parameters you deem necessary - good luck!
  let pivot = findPivotIndex(arr);
  if (pivot === -1) return -1;

  let left = 0;
  let right = arr.length - 1;
  if (target > arr[right]) {
    right = pivot;
  } else {
    left = pivot;
  }
  let middle = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return -1;
}
