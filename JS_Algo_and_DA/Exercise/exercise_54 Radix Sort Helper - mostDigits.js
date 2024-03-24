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

// mostDigits([1, 9, 10, 100, 99]); // 3
// mostDigits([100, 1010, 1, 500]); // 4
// mostDigits([0, 100000, 400, 12, 8]); // 6
// mostDigits([]); // 0
