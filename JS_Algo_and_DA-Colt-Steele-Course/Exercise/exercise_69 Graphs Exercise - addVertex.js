class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
}

var graph = new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.adjacencyList['A']; // []
// graph.adjacencyList['B']; // []
// graph.adjacencyList['C']; // []
