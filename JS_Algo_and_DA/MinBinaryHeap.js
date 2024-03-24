class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  #swap(idx1, idx2) {
    let temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }

  insert(val) {
    this.values.push(val);
    this.#bubbleUp();
    return this.values;
  }

  #bubbleUp() {
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (this.values[idx] >= 0 && this.values[idx] < this.values[parentIdx]) {
      this.#swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  extractMin() {
    let max;
    if (this.values.length > 0) {
      this.#swap(0, this.values.length - 1);
      max = this.values.pop();
      this.#sinkDown();
    }
    return max;
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
        if (leftChild < this.values[parentIdx]) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild < this.values[parentIdx]) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.#swap(parentIdx, swap);
      parentIdx = swap;
    }
  }
}

const minHeap = new MinBinaryHeap();
// [12, 27, 18, 41, 33, 39, 55]
minHeap.insert(41);
minHeap.insert(39);
minHeap.insert(33);
minHeap.insert(18);
minHeap.insert(27);
minHeap.insert(12);
minHeap.insert(55);
