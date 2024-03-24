// function power(num, pow){
//     if (pow === 0) return 1;
//     return num * power(num, pow-1)
// }
// power(2,4)

// function factorial(num){
//    if (num === 0) return 1;
//    return num * factorial(num-1)
// }
// factorial(7)

// function productOfArray(arr){
//     if (arr.length === 0) return 1;
//     return arr[0] * productOfArray(arr.slice(1));
// }
// productOfArray([1,2,3])

// function recursiveRange(num){
//    if (num === 0) return 0;
//    return num + recursiveRange(num-1);
// }
// recursiveRange(6)

// function fib(num){
//   // add whatever parameters you deem necessary - good luck!
//   if(num <= 2) return 1;
//   return fib(num-1) + fib(num-2)
// }

// fib(35)

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!

  let strLength = str.length;

  if (strLength === 1 || strLength === 0) return true;

  return (
    str[0] === str[strLength - 1] && isPalindrome(str.slice(1, strLength - 1))
  );
}
isPalindrome("tacocat");
