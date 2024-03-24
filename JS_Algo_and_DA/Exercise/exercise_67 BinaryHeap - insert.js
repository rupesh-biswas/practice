class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    let arr = this.values;
    arr.push(val);
    let n = arr.length - 1;
    let p = Math.floor((n - 1) / 2);
    while (n >= 0 && arr[n] > arr[p]) {
      [arr[n], arr[p]] = [arr[p], arr[n]];
      n = p;
      p = Math.floor((n - 1) / 2);
    }
    return this;
  }
}

binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
binaryHeap.values[0]; // 1

binaryHeap.insert(2);
binaryHeap.values[0]; // 2

binaryHeap.values; // [2, 1]

binaryHeap.insert(3);
binaryHeap.values[0]; // 3

binaryHeap.values; // [3, 1, 2]

binaryHeap.insert(4);
binaryHeap.values[0]; // 4

binaryHeap.values; // [4, 3, 2, 1]

binaryHeap.insert(5);
binaryHeap.values[0]; // 5

binaryHeap.values; // [5, 4, 2, 1, 3]

binaryHeap.insert(6);
binaryHeap.values[0]; // 6

binaryHeap.values; // [6, 4, 5, 1, 3, 2]
