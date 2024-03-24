function digitCount(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count = Math.max(count, digitCount(nums[i]));
  }
  return count;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums);

  let digitBuckets, digit;
  for (let i = 0; i < maxDigitsCount; i++) {
    digitBuckets = Array.from({ length: 10 }, () => []);
    for (let num of nums) {
      digit = getDigit(num, i);
      digitBuckets[digit].push(num);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
// radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]);
// // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
