function getDigit(num, loc) {
  return Math.floor((Math.abs(num) / Math.pow(10, loc)) % 10);
}

// getDigit(7542,3)

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// digitCount(352456)

function mostDigits(nums) {
  let maxCount = 0;
  for (let num of nums) {
    maxCount = Math.max(digitCount(num), maxCount);
  }
  return maxCount;
}

// mostDigits([1234, 56, 7]);
// mostDigits([1, 1, 11111, 1]);

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let num of nums) {
      let digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852, 4, 87468]);
