// function findPair(array, n){
//     let hash = {};
//     for(let i = 0; i < array.length; i++){
//         if(hash[array[i]]){
//             // If the value is already present in the hash table by either adding or subtracting the required difference
//             // then we have an pair which forms the required difference
//             return true;
//         }
//         hash[array[i] + n] = 1; // Add the difference. 1 is a placeholder to indicate truthyness.
//         hash[array[i] - n] = 1;
//     }
//     return false;
// }

function findPair(array, n) {
  array.sort((a, b) => a - b);

  let i = 0;
  let j = 1;
  let diff;
  n = Math.abs(n); // to avoid negative as a-b = diff is same as b-a= -diff

  // console.log(array)
  while (i < array.length && j < array.length) {
    diff = array[j] - array[i]; // array[j] is first to avoid negative diff as array is sorted
    // console.log(diff)
    if (diff === n) {
      return true;
    } else if (diff < n) {
      j++;
    } else {
      i++;
    }
  }
  return false;
}

// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true
// findPair([-4,4], -8) // true
// findPair([-4,4], 8) // true
// findPair([1,3,4,6],-2) // true
// findPair([0,1,3,4,6],-2) // true
