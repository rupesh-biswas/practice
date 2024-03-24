class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  #bubbleUp(arr) {
    let n = arr.length - 1;
    let p = Math.floor((n - 1) / 2);
    while (n >= 0 && arr[n] > arr[p]) {
      [arr[n], arr[p]] = [arr[p], arr[n]];
      n = p;
      p = Math.floor((n - 1) / 2);
    }
  }

  insert(val) {
    let arr = this.values;
    arr.push(val);
    this.#bubbleUp(arr);
    return this;
  }

  #sinkDown(arr) {
    let n = 0;
    let child1 = 2 * n + 1;
    let child2 = 2 * n + 2;

    let swap = null;
    while (true) {
      if (child1 < arr.length && arr[child1] > arr[n]) {
        swap = child1;
      }
      if (
        (swap === null && arr[child2] > arr[n]) ||
        arr[child2] > arr[child1]
      ) {
        swap = child2;
      }
      if (swap === null) break;
      [arr[n], arr[swap]] = [arr[swap], arr[n]];
      n = swap;
      swap = null;
      child1 = 2 * n + 1;
      child2 = 2 * n + 2;
    }
  }

  extractMax() {
    let arr = this.values;
    let last = arr.length - 1;
    [arr[0], arr[last]] = [arr[last], arr[0]];
    let deletedValue = arr.pop();
    this.#sinkDown(arr);
    return deletedValue;
  }
}

binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
binaryHeap.insert(2);
binaryHeap.insert(3);
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(6);
binaryHeap.extractMax();
binaryHeap.values[0]; // 5

binaryHeap.values; // [5,4,2,1,3])

binaryHeap.extractMax();
binaryHeap.values; // [4,3,2,1])

binaryHeap.extractMax();
binaryHeap.values; // [3,1,2])
