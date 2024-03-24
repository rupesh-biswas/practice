function minCoinChange(coins, amount) {
  coins.sort((a, b) => a - b); // sort coins largest to smallest

  let res = [];

  let n = coins.length - 1;
  let coin;
  for (let i = n; i >= 0; i--) {
    coin = coins.pop();
    while (amount >= coin) {
      res.push(coin);
      amount -= coin;
    }
  }
  return res;
}

let coins = [1, 50, 20];
let amount = 70;
minCoinChange(coins, amount);

// function minCoinChange(coins, amount) {
//     // Task: find the minimum number of coins required to form the given amount

//     let n = coins.length;

//     let dp = Array(n + 1).fill().map(()=> Array(amount + 1).fill());

//     let i, j; //i is the row and j is the columns
//     let include, exclude; // we either include the new coin in the iteration or ignore it

//     for(i=0; i <= n; i++ ){
//         for(j=0; j <= amount; j++){
//             if(j === 0){
//                 dp[i][j] = 0;
//             } else if (i === 0){
//                 dp[i][j] = Infinity;
//             } else if ( coins[i - 1] <= j) {
//                 exclude = dp[i - 1][j];
//                 include = 1 + dp[i][j - coins[i - 1]];
//                 // 1 because we are already including the coin and checking the minimum coins required to form the remaining amount;
//                 dp[i][j] = Math.min(exclude, include);
//             } else {
//                 // The new coin introduced is greater than the amount to be formed.
//                 exclude = dp[i - 1][j]
//                 dp[i][j] = exclude;
//             }
//         }
//     }
//     return dp[n][amount] === Infinity ? -1 : dp[n][amount]
// }

// let coins = [1,2,5]
// let amount = 6
// minCoinChange(coins, amount) //2

// let coins = [1,2,5]
// let amount = 11
// minCoinChange(coins, amount) //3

// let coins = [2]
// let amount = 3
// minCoinChange(coins, amount) //-1

// let coins = [1]
// let amount = 0
// minCoinChange(coins, amount) //0
