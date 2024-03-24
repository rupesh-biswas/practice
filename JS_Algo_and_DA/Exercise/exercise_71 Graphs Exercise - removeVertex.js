class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    let arr = this.adjacencyList[vertex];

    for (let i = 0; i < arr.length; i++) {
      this.removeEdge(vertex, arr[i]);
    }
    delete this.adjacencyList[vertex];
    return this.adjacencyList;
  }
}

var graph = new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'D');

// // graph.removeVertex('C');
// // graph.removeVertex('B');

// // graph.adjacencyList['A']; // still exists
// // graph.adjacencyList['D']; // still exists
