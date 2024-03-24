class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.#sort();
  }

  dequeue() {
    let delVal = this.values.shift();
    return delVal;
  }

  #sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let a = new PriorityQueue();
a.enqueue("A", 2);
a.enqueue("E", 5);
a.enqueue("B", 1);
a.enqueue("Q", 4);

// Notice we are sorting which is O(n * log(N))
