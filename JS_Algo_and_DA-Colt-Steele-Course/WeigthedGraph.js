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
}

const wg = new WeigthedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");

wg.addEdge("A", "B", 9);
wg.addEdge("A", "C", 5);
wg.addEdge("B", "C", 7);
