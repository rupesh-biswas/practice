function coinChange(coins, targetAmount) {
  // add whatever parameters you deem necessary - good luck!
  let n = coins.length;

  // Creating an array matrix of i number of coins and j number of targetAmount
  let dp = Array(n + 1)
    .fill()
    .map(() => Array(targetAmount + 1).fill());

  let i, j; // i is the coins index and j is the amount. Note coins[0] !== to the first value in the coins array.
  // It is used in the dp table only

  // When there is no coins
  for (j = 0; j <= targetAmount; j++) {
    dp[0][j] = 0;
  }

  // to make amount 0;
  for (i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }

  // fill dp table
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= targetAmount; j++) {
      if (j >= coins[i - 1]) {
        // i - 1 to retrive the correct value from coins index. Checking if the new coin is bigger than the amount
        // dp of i, j will be exclude the coin plus include the coin
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j]; // since new coin is bigger we have to exclude it.
      }
    }
  }

  return dp[n][targetAmount];
}

// const denominations = [1, 5, 10, 25]

// coinChange(denominations, 1) // 1
// coinChange(denominations, 2) // 1
// coinChange(denominations, 5) // 2
// coinChange(denominations, 10) // 4
// coinChange(denominations, 25) // 13
// coinChange(denominations, 45) // 39
// coinChange(denominations, 100) // 242
// coinChange(denominations, 145) // 622
// coinChange(denominations, 1451) // 425663
// coinChange(denominations, 14511) // 409222339
