class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  #swap(idx1, idx2) {
    let temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }

  #bubbleUp() {
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (this.values[idx] > 1 && this.values[idx] > this.values[parentIdx]) {
      this.#swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  insert(val) {
    this.values.push(val);
    this.#bubbleUp();
    return this.values;
  }

  #sinkDown() {
    let parentIdx = 0;
    const length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * parentIdx + 1;
      let rightChildIdx = 2 * parentIdx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > this.values[parentIdx]) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > this.values[parentIdx]) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.#swap(parentIdx, swap);
      parentIdx = swap;
    }
  }

  extractMax() {
    let max;
    if (this.values.length > 0) {
      this.#swap(0, this.values.length - 1);
      max = this.values.pop();
      this.#sinkDown();
    }
    return max;
  }
}

const maxHeap = new MaxBinaryHeap();
// [41, 39, 33, 18, 27, 12]
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);
