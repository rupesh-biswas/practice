function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}

function selectioSort(arr) {
  let minIdx;
  for (let i = 0; i < arr.length; i++) {
    minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(arr, arr[minIdx], arr[j])
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) arr = swap(arr, i, minIdx);
  }
  return arr;
}
// selectioSort([5, 3, 4, 1, 2])
selectioSort([32, 22, 10, 19, 17]);
