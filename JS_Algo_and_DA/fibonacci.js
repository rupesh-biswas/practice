// function fibonacchi(n) {
//     if(n==1 || n==2) return 1;
//     return fibonacchi(n-1) + fibonacchi(n-2);
// }

// Improve code with memorization
// function fibonacchi(n, memo=[]) {
//     if(memo[n] !== undefined) return memo[n];
//     if(n==1 || n==2) return 1;
//     res = fibonacchi(n-1, memo) + fibonacchi(n-2, memo);
//     memo[n] = res;
//     return res
// }

// More improvement
function memo_fibonacchi(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  res = fibonacchi(n - 1, memo) + fibonacchi(n - 2, memo);
  memo[n] = res;
  return res;
}

// More improvement using tabulation
function tab_fibonacchi(n) {
  if (n == 1 || n == 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
