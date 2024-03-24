function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  let mid = Math.floor(end / 2);
  [arr[mid], arr[end]] = [arr[end], arr[mid]];
  let pivotIndex = end;
  let [left, right] = [start, end - 1];
  let res;
  while (left <= right) {
    res = comparator(arr[left], arr[pivotIndex]);
    if (res >= 0) {
      res = comparator(arr[right], arr[pivotIndex]);
      if (res < 0) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
      } else {
        right--;
      }
    } else {
      left++;
    }
  }
  [arr[left], arr[pivotIndex]] = [arr[pivotIndex], arr[left]];
  pivotIndex = left;
  return pivotIndex;
}

// var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
// var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
// var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strLength(a, b) {
  return a.length - b.length;
}

// pivot(arr1); // 3
// pivot(arr2); // 4
// pivot(arr3, strLength); // 1

// arr1.slice(0, 3).sort((a, b) => a - b); // [2, 3, 4]
// arr1.slice(3).sort((a, b) => a - b); // [5, 7, 8, 9, 10, 20]

// arr2.slice(0, 4).sort((a, b) => a - b); // [0, 2, 4, 5]
// arr2.slice(4).sort((a, b) => a - b); // [8, 10, 11, 12, 13, 16]

// arr3.slice(0, 1).sort(strLength); // ["Blue"]
// arr3.slice(1).sort(strLength); // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]
