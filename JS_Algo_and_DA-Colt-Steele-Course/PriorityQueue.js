class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  #swap(idx1, idx2) {
    let temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.#bubbleUp();
    return this.values;
  }

  #bubbleUp() {
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (
      idx > 0 &&
      this.values[idx].priority < this.values[parentIdx].priority
    ) {
      this.#swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  dequeue() {
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
        leftChild = this.values[leftChildIdx].priority;
        if (leftChild < this.values[parentIdx].priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx].priority;
        if (
          (swap === null && rightChild < this.values[parentIdx].priority) ||
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

const pQueue = new PriorityQueue();
pQueue.enqueue("go out", 3);
pQueue.enqueue("pay bill", 1);
pQueue.enqueue("walk dog", 2);
pQueue.enqueue("Walk Cat", 4);
pQueue.enqueue("take medicine", 1);

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
