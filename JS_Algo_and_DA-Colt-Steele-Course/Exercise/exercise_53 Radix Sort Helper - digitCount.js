// function digitCount(num) {
//    return Math.abs(num).toString().length
// }

// function digitCount(num) {
//     num = Math.abs(num);
//     if (num === 0) return 1;
//     let count = 0;
//     while (num > 0) {
//         num = Math.floor(num / 10);
//         count++;
//     }
//     return count;
// }

function digitCount(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// digitCount(-1); // 1
// digitCount(1); // 1
// digitCount(9); // 1
// digitCount(25); // 2
// digitCount(314); // 3
// digitCount(1234); // 4
digitCount(77777); // 5
