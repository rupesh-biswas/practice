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
}

var graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

graph.adjacencyList["A"]; // contains both ('B', 'C')
graph.adjacencyList["B"]; // contains both ('A', 'D')
graph.adjacencyList["C"]; // contains both ('A', 'D')
graph.adjacencyList["D"]; // contains both ('C', 'B')
