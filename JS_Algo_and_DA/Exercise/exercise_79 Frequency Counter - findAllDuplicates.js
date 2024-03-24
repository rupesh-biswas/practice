function findAllDuplicates(arr) {
  let counter = {};
  let res = new Set();

  for (let num of arr) {
    counter[num] = ++counter[num] || 1;
    if (counter[num] > 1) {
      res.add(num);
    }
  }
  return Array.from(res);
}

findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]); // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
