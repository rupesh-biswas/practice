// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences
// of the number in the array

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
// Time Complexity - O(log n)

function sortedFrequency(arr, targetNum) {
  // add whatever parameters you deem necessary - good luck!

  let firstOccurance = -1;
  let lastOccurance = -1;

  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[middle] < targetNum) {
      left = middle + 1;
    } else if (arr[middle] > targetNum) {
      right = middle - 1;
    } else {
      if (arr[middle - 1] === targetNum) {
        right = middle;
      } else {
        firstOccurance = middle;
        break;
      }
    }
    middle = Math.floor((left + right) / 2);
  }
  if (firstOccurance === -1) return -1;

  left = 0;
  right = arr.length - 1;
  middle = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[middle] < targetNum) {
      left = middle + 1;
    } else if (arr[middle] > targetNum) {
      right = middle - 1;
    } else {
      if (arr[middle + 1] === targetNum) {
        left = middle;
      } else {
        lastOccurance = middle;
        break;
      }
    }
    middle = Math.floor((left + right) / 2);
  }

  return lastOccurance - firstOccurance + 1;
}
