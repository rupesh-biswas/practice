class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(newVertex) {
    if (this.adjacencyList[newVertex]) throw Error("Vertex already defined");
    this.adjacencyList[newVertex] = [];
    return this;
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this;
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (ele) => ele != vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (ele) => ele != vertex1
    );
    return this;
  }

  removeVertex(vertex) {
    let edges = this.adjacencyList[vertex];

    for (let i = 0; i < edges.length; i++) {
      this.removeEdge(vertex, edges[i]);
    }

    delete this.adjacencyList[vertex];
    return this;
  }

  dfsRecursive(start) {
    let results = [];
    let visitedNodes = {};
    let adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      results.push(vertex);
      visitedNodes[vertex] = true;

      adjacencyList[vertex].forEach((neighbour) => {
        if (!visitedNodes[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start);

    return results;
  }

  dfsIterative(start) {
    let results = [];
    let visitedNodes = {};

    let stack = [start];

    while (stack.length != 0) {
      let v = stack.pop();

      if (!visitedNodes[v]) {
        results.push(v);
        visitedNodes[v] = true;

        this.adjacencyList[v].forEach((neighbour) => {
          stack.push(neighbour);
        });
      }
    }
    return results;
  }

  bfsIterative(start) {
    let results = [];
    let visitedNodes = {};

    let queue = [start];

    while (queue.length != 0) {
      let v = queue.shift();

      if (!visitedNodes[v]) {
        results.push(v);
        visitedNodes[v] = true;

        this.adjacencyList[v].forEach((neighbour) => {
          queue.push(neighbour);
        });
      }
    }
    return results;
  }
}

const g = new Graph();

// g.addVertex('Tokyo');
// g.addVertex('Dallas');
// g.addVertex('Aspen');
// g.addVertex('Hong Kong');
// g.addVertex('Los Angeles');

// g.addEdge('Tokyo', 'Dallas');
// g.addEdge('Tokyo', 'Hong Kong');
// g.addEdge('Dallas', 'Aspen');
// g.addEdge('Dallas', 'Hong Kong');
// g.addEdge('Dallas', 'Los Angeles');
// g.addEdge('Hong Kong', 'Los Angeles');

// g.removeEdge('Tokyo', 'Dallas');

// g.removeVertex('Hong Kong');

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
