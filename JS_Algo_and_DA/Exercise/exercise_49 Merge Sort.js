function merge(srtArr1, srtArr2, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  let resArr = [];
  let res;
  let [i, j] = [0, 0];

  while (i < srtArr1.length && j < srtArr2.length) {
    res = comparator(srtArr1[i], srtArr2[j]);
    if (res > 0) {
      resArr.push(srtArr2[j]);
      j++;
    } else {
      resArr.push(srtArr1[i]);
      i++;
    }
  }
  i < srtArr1.length && resArr.push(...srtArr1.slice(i));
  j < srtArr2.length && resArr.push(...srtArr2.slice(j));
  return resArr;
}

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle), comparator);
  let right = mergeSort(arr.slice(middle), comparator);
  return merge(left, right, comparator);
}

// mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// mergeSort([1, 2, 3]); // [1, 2, 3]
// mergeSort([]);

// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

// function strComp(a, b) {
//   if (a < b) { return -1;}
//   else if (a > b) { return 1;}
//   return 0;
// }

// mergeSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

// var moarKittyData = [{
//   name: "LilBub",
//   age: 7
// }, {
//   name: "Garfield",
//   age: 40
// }, {
//   name: "Heathcliff",
//   age: 45
// }, {
//   name: "Blue",
//   age: 1
// }, {
//   name: "Grumpy",
//   age: 6
// }];

// function oldestToYoungest(a, b) {
//   return b.age - a.age;
// }

// mergeSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
