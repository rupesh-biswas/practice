// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// function someRecursive(arr, fn){
//   // add whatever parameters you deem necessary - good luck!

//   if(arr.length === 0) return false;

//   return fn(arr[0]) || someRecursive(arr.slice(1),fn);
// }

// function flatten(arr){
//   // add whatever parameters you deem necessary - good luck!

//   const result = [];

//  function helper(helperInput){
//      console.log(helperInput)
//      if(helperInput.length === 0) return;
//      let val = helperInput[0];
//      if(Array.isArray(val)){
//           helper(val);
//      } else {
//          result.push(val);
//      }
//      return helper(helperInput.slice(1));
//  }
//  helper(arr);
//  return result;
// }
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
// flatten([1, 2, 3, [4, 5] ])

// function capitalizeFirst (arr) {
//   // add whatever parameters you deem necessary - good luck!

//   if(arr.length === 0) return [];

//   let val = arr[0]
//   let firstChar = val.charAt(0).toUpperCase();
//   let finalWord = Array(firstChar + val.slice(1));

//   return finalWord.concat(capitalizeFirst(arr.slice(1)))

// }

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// function nestedEvenSum (bigObj) {
//   // add whatever parameters you deem necessary - good luck!

//   let total = 0;
//   for(let key in bigObj){
//       let val = bigObj[key];
//       if(typeof val === "number" && val % 2 === 0 ){
//           total+=val
//       } else if (typeof val === "object") {
//           total+=nestedEvenSum(val);
//       }
//   }
//   return total;
// }

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

// var obj2 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

// function capitalizeWords (arr) {
//   // add whatever parameters you deem necessary - good luck!

//   if(arr.length === 0) return [];

//   return [arr[0].toUpperCase()].concat(capitalizeWords(arr.splice(1)))

// }

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// function stringifyNumbers(bigObj){

//     if(Array.isArray(bigObj)) return bigObj;
//     let newObj = {};

//     for(let key in bigObj){
//         let val = bigObj[key];
//         if(typeof val === "number"){
//             newObj[key] = val.toLocaleString();
//         } else if (typeof val === "object"){
//             newObj[key] = stringifyNumbers(val)
//         } else {
//             newObj[key] = val;
//         }
//     }

//     return newObj;
// }

// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

// stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function collectStrings(bigObj) {
  let collector = [];
  for (let key in bigObj) {
    let val = bigObj[key];
    if (typeof val === "string") {
      collector = collector.concat(val);
    } else if (typeof val === "object" && !Array.isArray(val)) {
      collector = collector.concat(collectStrings(val));
    }
  }

  return collector;
}

// function collectStrings(bigObj, collector = []){

//     for(let key in bigObj){
//         let val = bigObj[key];
//         if(typeof val === "string"){
//             collector.push(val)
//         } else if(typeof val === "object" && !Array.isArray(val)){
//             collector = collectStrings(val, collector)
//         }
//     }

//     return collector;
// }

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"])
