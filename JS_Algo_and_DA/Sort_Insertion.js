// function insertionSort(arr) {
//  for (let i = 1; i < arr.length; i++) {
//      if(arr[i] < arr[i - 1]){
//          let minIdx = i;
//          for (let j = minIdx - 1; j => 0; j--) {
//              if (arr[minIdx] > arr[j] )  {

//              }
//          }
//      }
//  }
// }

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let index = i;
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
