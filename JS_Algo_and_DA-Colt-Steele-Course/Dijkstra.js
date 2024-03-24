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

class WeigthedGraph {
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

const graph = new WeigthedGraph();
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
