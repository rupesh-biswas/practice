// function getDigit(num, i) {
//     let arr = num.toString().split('');
//     if (i >= arr.length) return 0;
//     return parseInt(arr.reverse()[i])
// }

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// function getDigit(num, i) {
//     if (i < 0) return 0;

//     let reversedNum = 0;
//     let reminder;

//     for (let count = 0; count <= i; count++) {
//         reminder = num % 10;
//         reversedNum = reversedNum * 10 + reminder;
//         num = Math.floor(num / 10);
//     }
//     return reversedNum % 10;
// }

// getDigit(12345, 0); // 5
// getDigit(12345, 1); // 4
// getDigit(12345, 2); // 3
// getDigit(12345, 3); // 2
// getDigit(12345, 4); // 1
getDigit(12345, 5); // 0

// getDigit(8987, 0); // 7
// getDigit(8987, 1); // 8
// getDigit(8987, 2); // 9
// getDigit(8987, 3); // 8
// getDigit(8987, 4); // 0
