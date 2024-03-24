function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

function pivot(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            arr = swap(arr, swapIdx, i);
            console.log(arr)
        }
    }
    arr = swap(arr, swapIdx, start);
    // console.log(arr);
    return swapIdx;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))
// [4, 2, 1, 3, 5, 7, 6, 8]
// [28, 41, 4,11,16,1,40,14,36,37,42,18]
// [26,23,27,44,17,47,39,42,43]

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {

        let pivotIdx = pivot(arr, left, right);

        // left
        quickSort(arr, left, pivotIdx - 1);

        // right
        quickSort(arr, pivotIdx + 1, right);

    }
    return arr;
}
// console.log(quickSort([4, 6, 9, 1, 2, 5, 3])); //[1,2,3,4,5,6,9]

pivot([4, 2, 8, 1, 5, 7, 6, 3])

// [4, 6, 9, 1, 2, 5, 3]
// [3, 2, 1, 4, 6, 9, 5]
//           4
// 3, 2, 1      6, 9, 5
//       3            6
// 2, 1
//    2
// 1
