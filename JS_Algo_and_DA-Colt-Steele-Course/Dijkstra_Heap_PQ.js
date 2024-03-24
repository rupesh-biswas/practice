class Node {
  constructor(val, priority) {
    this.value = val;
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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(newVertex) {
    if (this.adjacencyList[newVertex]) throw Error("Vertex already defined");
    this.adjacencyList[newVertex] = [];
    return this;
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
    return this;
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;

    //build up inital state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === finish) {
        // we are done
        // build a path to return to end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          let nextNeighbor = nextNode.node;
          let nextNeighborWeight = nextNode.weight;

          // calculate new distance to neighboring node
          let neighborNodeDistance = distances[smallest] + nextNeighborWeight;

          if (neighborNodeDistance < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = neighborNodeDistance;
            // updating previous - How to get to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in the priority queue with new priority
            nodes.enqueue(nextNeighbor, neighborNodeDistance);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E"); // ["A", "C", "D", "F", "E"]
