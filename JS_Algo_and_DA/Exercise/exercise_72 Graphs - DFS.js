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
  depthFirstSearch(start) {
    let adjacencyList = this.adjacencyList;
    let results = [];
    let visitedNodes = {};
    (function dfs(vertex) {
      results.push(vertex);
      visitedNodes[vertex] = true;
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visitedNodes[neighbour]) {
          dfs(neighbour);
        }
      });
    })(start);
    return results;
  }
  dfsIterative(start) {
    let adjacencyList = this.adjacencyList;
    let results = [];
    let visitedNodes = {};
    let stack = [start];
    let vertex;
    while (stack.length !== 0) {
      vertex = stack.pop();
      if (!visitedNodes[vertex]) {
        results.push(vertex);
        visitedNodes[vertex] = true;

        adjacencyList[vertex].forEach((neeighbour) => {
          stack.push(neeighbour);
        });
      }
    }
    return results;
  }
}

var graph = new Graph();

graph.addVertex("S");
graph.addVertex("P");
graph.addVertex("U");
graph.addVertex("X");
graph.addVertex("Q");
graph.addVertex("Y");
graph.addVertex("V");
graph.addVertex("R");
graph.addVertex("W");
graph.addVertex("T");

graph.addEdge("S", "P");
graph.addEdge("S", "U");

graph.addEdge("P", "X");
graph.addEdge("U", "X");

graph.addEdge("P", "Q");
graph.addEdge("U", "V");

graph.addEdge("X", "Q");
graph.addEdge("X", "Y");
graph.addEdge("X", "V");

graph.addEdge("Q", "R");
graph.addEdge("Y", "R");

graph.addEdge("Y", "W");
graph.addEdge("V", "W");

graph.addEdge("R", "T");
graph.addEdge("W", "T");

// graph.depthFirstSearch('S');

/**
 * results:
 *
 * ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"] // recursive version
 * ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"] // iterative (stack) version
 *
 **/
