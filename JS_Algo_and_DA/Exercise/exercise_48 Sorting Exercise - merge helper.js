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

// var arr1 = [1,3,4,5];
// var arr2 = [2,4,6,8];
// merge(arr1,arr2) // [1,2,3,4,4,5,6,8]

// arr1 // [1,3,4,5];
// arr2 // [2,4,6,8];

// var arr3 = [-2,-1,0,4,5,6];
// var arr4 = [-3,-2,-1,2,3,5,7,8];

// merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

// var arr5 = [3,4,5]
// var arr6 = [1,2]

// merge(arr5,arr6) // [1,2,3,4,5]

// var names = ["Bob", "Ethel", "Christine"]
// var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]

// function stringLengthComparator(str1, str2) {
//   return str1.length - str2.length;
// }

// merge(names, otherNames, stringLengthComparator); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
